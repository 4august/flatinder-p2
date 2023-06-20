'use strict';

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../respositories/user-repository');
const User = require('../models/user-model');
const md5 = require('md5');

const emailService = require('../services/email-service');

exports.post = async (req, res, next) => {
    try {
        let contract = new ValidationContract();
        contract.hasMinLen(req.body.first_name, 3, 'O nome deve conter pelo menos 3 caracteres');
        contract.hasMinLen(req.body.last_name, 3, 'O segundo nome deve conter pelo menos 3 caracteres');
        contract.isEmail(req.body.email, 'E-mail inválido');
        contract.hasMinLen(req.body.password, 6, 'A senha deve conter pelo menos 6 caracteres');

        // Se os dados forem inválidos
        if (!contract.isValid()) {
            return res.status(400).send(contract.errors());
        }

        await repository.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY) //encriptação de senha
        });

        emailService.send(
            req.body.email,
            'Bem vindo ao tinder',
            global.EMAIL_TMPL.replace('{0}', req.body.first_name)
        );

        return res.status(201).send({
            message: 'Usuário cadastrado com sucesso!'
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};
