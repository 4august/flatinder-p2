'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pictureSchema = new Schema({
    namePhoto: {
        type: String,
        required: [true, 'É preciso ter uma imagem'],
        trim: true
    },
    srcPhoto: {
        type: String,
        required: [true, 'É preciso ter uma imagem'],
        trim: true
    }
});

module.exports = mongoose.model('Picture', pictureSchema);