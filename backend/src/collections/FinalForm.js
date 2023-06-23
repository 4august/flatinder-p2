const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    image_profile: "String",
    first_name : "String",
    last_name : "String",
    date_birth : "String",
    sex : "String",
    interests : "String",
})

const form = mongoose.model('Form', formSchema);
module.exports = form
