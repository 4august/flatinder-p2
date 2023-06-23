'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    photo: {
        type: String,
        required: [true, 'É preciso ter uma imagem'],
        trim: true
    },
    first_name: {
        type: String,
        required: [true, 'É preciso preencher os campos'],
        trim: true
    },
    last_name: {
        type: String,
        required: [true, 'É preciso preencher os campos'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'É preciso preencher os campos'],
        trim: true
    },
    date_birthday: {
        type: Date,
        required: [true, 'É preciso preencher o campo de aniversario'],
        trim: true
    },
    password: {
        type: String,
        required: [true, 'É preciso preencher os campos'],
        trim: true
    },
    gender: {
        type: String,
        required: [true, 'É preciso preencher o seu genero'],
        trim: true
    },
    interests: [{
        type: String,
        required: [true, 'É preciso preencher o seu interesse'],
        trim: true
    }],
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
});

module.exports = mongoose.model('User', schema);