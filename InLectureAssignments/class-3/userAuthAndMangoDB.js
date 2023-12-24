const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const app = express();

const jwtPassword = "123456";

mongoose.connect("mongodb+srv://McACE007:MrinalBaba007mc@cluster0.0gbxyhp.mongodb.net/users");

const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
});


async function userExists(username, password) {
  let isExist = await User.findOne({ email: username, password: password });
  if (isExist != null) {
    return true;
  } return false;
}

async function verifyUser(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  const token = req.headers.authorization;

  try {
    jwt.verify(token, jwtPassword);
  } catch (e) {
    return res.status(401).send("Invalid authorization token");
  }

  if (! await userExists(username, password)) {
    return res.status(401).send("Incorrect username or password");
  }

  return next();
};


app.use(express.json());

app.post("/signup", async function(req, res) {
  const name = req.body.name;
  const username = req.body.username;
  const password = req.body.password;

  if (await userExists(username, password)) {
    return res.status(403).json({
      msg: "Email already in use",
    });
  }

  await User.create({
    name: name,
    email: username,
    password: password
  });

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", verifyUser, async function(req, res) {
  let allUsers = await User.find({}).exec();
  res.json(allUsers);
});

app.listen(3000)
