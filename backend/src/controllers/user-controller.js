'use strict';

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../respositories/user-repository');
const User = require('../models/user-model');
const md5 = require('md5');
const authService = require('../services/auth-service')

const emailService = require('../services/email-service');

exports.post = async (req, res, next) => {
  try {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.first_name, 3, 'O nome deve conter pelo menos 3 caracteres');
    contract.hasMinLen(req.body.last_name, 3, 'O segundo nome deve conter pelo menos 3 caracteres');
    contract.isEmail(req.body.email, 'E-mail inválido');
    contract.hasMinLen(req.body.password, 6, 'A senha deve conter pelo menos 6 caracteres');
    contract.hasMinLen(req.body.date_birthday, 6, 'A data deve conter pelo menos 6 caracteres');
    contract.hasMinLen(req.body.gender, 6, 'O genero deve conter pelo menos 6 caracteres');

    // Se os dados forem inválidos
    if (!contract.isValid()) {
      return res.status(400).send(contract.errors());
    }

    await repository.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      date_birthday: req.body.date_birthday,
      password: md5(req.body.password + global.SALT_KEY), //encriptação de senha
      gender: req.body.gender,
      interests: req.body.interests
    });

    emailService.send(
      req.body.email,
      'Bem vindo ao tinder',
      global.EMAIL_TMPL.replace('{0}', req.body.first_name)
    );

    res.status(201).send({
      message: 'Usuário cadastrado com sucesso!'
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      message: 'Falha ao processar sua requisição'
    });
  }
};
// metodo de autenticação
exports.authenticate = async (req, res, next) => {
  try {
    const user = await repository.authenticate({
      email: req.body.email,
      password: md5(req.body.password + global.SALT_KEY) //encriptação de senha
    });

    if (!user) {
      res.status(404).send({ message: 'Usuário ou senha inválidos' });
      return
    }

    const token = await authService.generateToken({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      date_birthday: user.date_birthday,
      gender: user.gender,
      interests: user.interests
    });

    res.status(201).send({
      token: token,
      data: {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email
      },
      message: 'Usuário autenticado'
    });



  } catch (error) {
    console.error(error);
    return res.status(500).send({
      message: 'Falha ao processar sua requisição'
    });
  }
};

// // Método para curtir um usuário
// exports.likeUser = async (req, res, next) => {
//   try {
//     const userId = req.params.userId; // ID do usuário a ser curtido
//     const currentUserId = req.user._id; // ID do usuário autenticado

//     // Verificar se o usuário a ser curtido existe
//     const user = await repository.getById(userId);
//     if (!user) {
//       return res.status(404).send({ message: 'Usuário não encontrado' });
//     }

//     // Verificar se o usuário já foi curtido anteriormente
//     if (user.likes.includes(currentUserId)) {
//       return res.status(400).send({ message: 'Usuário já foi curtido anteriormente' });
//     }

//     // Adicionar o ID do usuário autenticado à lista de curtidas do usuário
//     user.likes.push(currentUserId);
//     await repository.update(userId, user);

//     res.status(200).send({ message: 'Usuário curtido com sucesso' });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).send({ message: 'Falha ao curtir o usuário' });
//   }
// };
