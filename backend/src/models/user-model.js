'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
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
    image: {
        type: String,
        required: [true, 'É preciso preencher imagem'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'É preciso preencher os campos'],
        trim: true
    },
    password: {
        type: String,
        required: [true, 'É preciso preencher os campos'],
        trim: true
    }
});

module.exports = mongoose.model('User', schema);