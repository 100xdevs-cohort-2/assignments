const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://admin:5wa9bEJXFrVHG8BB@cluster0.06mojht.mongodb.net/users_app"
);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

const user = new User({
  name: "Guddu Kumar",
  email: "kumarguddu609@gmail.com",
  password: "guddu",
});
user.save();
//.then(() => console.log('meow'));
console.log("Data saved successfully");
