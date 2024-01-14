const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const app = express();
const jwtPassword = "guddu";

//connecting to database
mongoose.connect(
  "mongodb+srv://admin:5wa9bEJXFrVHG8BB@cluster0.06mojht.mongodb.net/todo_app"
);

//database schema
const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
  todo: {
    type: String,
    default: null,
  },
});

//function to create jwt token
function generateToken(username) {
  return jwt.sign({ username }, jwtPassword);
}

//middleware to authenticate token
function authenticateUser(req, res, next) {
  const token = req.headers.authorization;
  // if (!token) {
  //   return res.status(401).json({ msg: "Unauthorized" });
  // }

  const decodedToken = jwt.verify(token, jwtPassword);
  req.username = decodedToken.username;
  next();
}

app.use(express.json());

//post endpoint
app.post("/signup", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  //checking user exist or not

  const existingUser = await User.findOne({
    email: username,
  });

  if (existingUser) {
    return res.status(400).json({
      msg: "user already exists",
    });
  }

  //it user not exist, creating new user
  const user = new User({
    name: name,
    email: username,
    password: password,
  });
  const token = generateToken(username);
  //saving user info in database
  await user.save();
  res.json({
    msg: "User created successfully",
    token: token,
  });
});

//post todo end point
app.post("/todo", authenticateUser, async function (req, res) {
  const username = req.username;
  const todo = req.body.todo;

  await User.updateOne({ email: username }, { $set: { todo: todo } });

  res.json({ msg: "Todo data received successfully" });
});

app.listen(3000, function () {
  console.log("listening at 3000");
});

//
// const existingUser = await User.findOne({
//   email: username,
// });

// if (!existingUser) {
//   return res.status(400).json({
//     msg: "user does not exists",
//   });
// }
