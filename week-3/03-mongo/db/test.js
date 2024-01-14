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

//existing user check fn
// function existingUser(username) {
//   const userExist = User.findOne({ email: username });
//   return userExist;
// }

app.use(express.json());
//post endpoint
app.post("/signup", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({ email: username });
  if (existingUser) {
    return res.status(400).send("Username already exists");
  }
  const user = new User({
    name: name,
    email: username,
    password: password,
  });
  user.save();
  res.json({
    msg: "User created Successfully",
  });
});

//.then(() => console.log('meow'));

app.listen(3000, function () {
  console.log("Listening at 3000");
});
