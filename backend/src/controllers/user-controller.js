'use strict';

const ValidationContract = require('../validators/fluent-validator')
const repository = require('../respositories/user-repository')
const User = require('../models/user-model')
const md5 = require('md5')

exports.post = async (req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.first_name, 3, 'O nome deve conter pelo menos 3 caracteres');
    contract.hasMinLen(req.body.last_name, 3, 'O segundo nome deve conter pelo menos 3 caracteres');
    contract.isEmail(req.body.email, 'E-mail inválido');
    contract.hasMinLen(req.body.password, 6, 'A senha deve conter pelo menos 6 caracteres');

    // Se os dados forem inválidos
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {
        await repository.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY) //encriptação de senha
        });
        res.status(201).send({
            message: 'Usuario cadastrado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};


// exports.put = (req, res, next) => {
//     let id = req.params.id
//     res.status(201).send({
//         id: id,
//         item: req.body
//     });
// };

// exports.delete = (req, res, next) => {
//     let id = req.params.id
//     res.status(200).send(req.body);
// };