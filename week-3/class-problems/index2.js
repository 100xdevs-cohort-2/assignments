const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://shivanandasai38:NONOyIsdljumo0nOdI3i@users.e4namw8.mongodb.net/usernew"
);

const user = mongoose.model("User_Table", {
  name: String,
  username: String,
  password: String,
});

const newUser1 = new user({
  name: "Shivananda Sai",
  username: "shivanandasai38",
  password: "12312369",
});

newUser1.save();
