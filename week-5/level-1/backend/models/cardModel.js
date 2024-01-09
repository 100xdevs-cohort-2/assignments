const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  name: String,
  description: String,
  socialMeidaHandles: [
    {
      icon: String,
      path: String,
    },
  ],
  interests: [String],
});
const Card = mongoose.model("Card", CardSchema);
module.exports = Card;
