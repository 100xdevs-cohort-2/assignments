const mongoose = require("mongoose");

mongoose.connect("")

const cardSchema = mongoose.Schema({
    name: String,
    description: String,
    interests: [String],
    social: [String]
})

const card = mongoose.model('cards', cardSchema);

module.exports = card;
