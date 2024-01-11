const express = require("express");
const router = express.Router();
const { User, Card } = require("../db/db");
const jwt = require("jsonwebtoken");
const { userTokenVerification } = require("../middlewares/authorization");

const jwtUserSecret = "User";

//USER LOGIN
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username: username });
    if (existingUser) {
      if (existingUser.password === password) {
        const token = jwt.sign({ username: username }, jwtUserSecret);
        res.status(200).send({ token: token });
      } else {
        res.status(404).json({ error: "Passwords did not match!" });
      }
    } else {
      res.status(409).json({ error: "Please register first" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server Error!" });
  }
});

//USER REGISTER
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    const createUser = await User.create({
      username: username,
      password: password,
    });

    if (createUser) {
      res.status(200).json({ message: "User created" });
    } else {
      res.status(404).json({ error: "Failed to create user!" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/get-all-cards", userTokenVerification, async (req, res) => {
  try {
    const allCards = await Card.find({});
    if (!allCards) {
      res.status(404).json({ error: "No cards for users in DB!" });
    } else {
      res.status(200).json(allCards);
    }
  } catch (error) {
    res.status(500).json({ error: "Error fetching cards from DB!" });
  }
});

module.exports = router;
