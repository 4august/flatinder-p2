const mongoose = require("mongoose");

const formSexSchema = new mongoose.Schema({
    sex: String,
    // interests: ["String"]

});

const formSex = mongoose.model('Forms', formSexSchema);
module.exports = formSex;