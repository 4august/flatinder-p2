'use strict';

const config = require('../config')
const sendgrid = require('sendgrid')(config.sendgridKey);

exports.send = async (to, subject, body) => {
    sendgrid.send({
        to: to,
        from: 'tinder@trab.com',
        subject: subject, // assunto
        html: body // corpo
    })
}