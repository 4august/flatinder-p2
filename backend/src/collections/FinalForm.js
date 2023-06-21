const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    sex : "String",
    interests: "String"
})

const form = mongoose.model('Form', formSchema);
module.exports = form
