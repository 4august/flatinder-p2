'use strict'

const mongoose = require('mongoose');
const User = require('../models/user-model');

exports.get = async () => {
    const res = await User.find({
        active: true
    }, 'first_name last_name email password');
    return res;
}

exports.create = async (data) => {
    let user = new User(data);
    await user.save();
}