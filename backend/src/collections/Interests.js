const mongoose = require("mongoose");

const formInterestsSchema = new mongoose.Schema({
    interests: "String"

});

const formInterests = mongoose.model('Interests', formInterestsSchema);
module.exports = formInterests;