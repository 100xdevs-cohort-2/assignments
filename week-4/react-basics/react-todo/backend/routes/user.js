//--IMPORTS--;
const express = require("express");
const { Router } = require("express");
const router = Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { User } = require("../db/db");
const { userInputValidation } = require("../middlewares/inputValidation");

//--MIDDLEWARES--
const app = express();
app.use(express.json());
app.use(cors());

//--VARIABLES--
let userId = 0;
let jwtSecret = "user";

//--ROUTES--
router.post("/signup", userInputValidation, async (req, res) => {
  const { username, password } = req.userData;

  try {
    const existingUser = await User.findOne({ username: username });
    if (existingUser) {
      return res.status(409).send("User already exists");
    }
    const newUser = await User.create({
      username: username,
      password: password,
      userId: userId++,
    });

    if (newUser) {
      res.status(200).json({ message: "User registered!" });
    }
  } catch (error) {
    res.status(500).json("Error registering in DB");
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res
      .status(401)
      .send({ error: "You must provide username and password" });

  try {
    const existingUser = await User.findOne({ username: username });
    if (!existingUser) {
      return res.status(409).send("Username not found");
    }

    if (existingUser.password == password) {
      let token = jwt.sign({ username: username }, jwtSecret);
      res.status(200).json({ token: token });
    } else {
      res.status(403).send("Wrong Password");
    }
  } catch (error) {
    res.status(500).json("Error fetching user from DB");
  }
});

module.exports = router;
