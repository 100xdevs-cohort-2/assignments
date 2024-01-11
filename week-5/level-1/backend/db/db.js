const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:02041996@practisecluster.agvl9l9.mongodb.net/business_card_DB?retryWrites=true&w=majority"
);

const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
  cards: [String],
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const cardSchema = new mongoose.Schema({
  cardId: String,
  name: String,
  description: String,
  social: {
    linkedin: String,
    Twitter: String,
  },
  interest: [String],
  createdBy: String,
});

const Admin = mongoose.model("Admin", adminSchema);
const User = mongoose.model("User", userSchema);
const Card = mongoose.model("Card", cardSchema);

module.exports = {
  Admin,
  User,
  Card,
};
