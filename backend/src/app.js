'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// instância do express
const app = express()
const router = express.Router();

// conecta no banco
mongoose.connect('mongodb+srv://emanuelibanhescontato:rJsOj64zUNXByQNG@cluster0.nzrr5rk.mongodb.net/?retryWrites=true&w=majority')

// carrega as rotas
const index = require('./routes/index');
const userRoute = require('./routes/user-route');

// models
const User = require('./models/user-model')

app.use(bodyParser.json()); //converte para json
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/cadastro-usuario', userRoute)
app.use('/atualiza', userRoute)
app.use('/deleta', userRoute)

module.exports = app;