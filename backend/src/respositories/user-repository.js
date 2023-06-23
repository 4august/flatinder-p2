'use strict'

const mongoose = require('mongoose');
const User = require('../models/user-model');

exports.authenticate = async (data) => {
    const res = await User.findOne({ // pega uma informação
        email: data.email, 
        password: data.password
    });
    return res;
}

exports.create = async (data) => {
    let user = new User(data);
    await user.save();
}