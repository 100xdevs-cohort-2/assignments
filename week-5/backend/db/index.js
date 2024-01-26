const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://vishruthvs2003:zgHs5W6OVdvzv2p8@cluster0.fd6ek8i.mongodb.net/businessCard"
);
//Define the required schemas
const AdminSchema = new mongoose.Schema({
  //def of schema
  username: String,
  password: String,
});
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  Cards: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Card",
    },
  ],
});
const CardSchema = new mongoose.Schema({
  name: String,
  description: String,
  socialmediaLink: String,
  intrests: String,
});
const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Card = mongoose.model("Card", CardSchema);

module.exports = {
  Admin,
  User,
  Card,
};
