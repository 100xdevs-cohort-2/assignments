const express = require("express");
const router = express.Router();

const { Admin, Card } = require("../db/db");
const jwt = require("jsonwebtoken");

//MIDDLEWARE IMPORTS
const { cardValidation } = require("../middlewares/validation");
const { adminTokenVerification } = require("../middlewares/authorization");

const jwtAdminSecret = "Admin";

//ADMIN LOGIN
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await Admin.findOne({ username: username });
    if (existingUser) {
      if (existingUser.password === password) {
        const token = jwt.sign({ username: username }, jwtAdminSecret);
        res.status(200).send({ token: token });
      } else {
        res.status(404).json({ error: "Passwords did not match!" });
      }
    } else {
      res.status(409).json({ error: "User not found in db!" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server Error!" });
  }
});

//ADMIN REGISTER
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    const createAdmin = await Admin.create({
      username: username,
      password: password,
      cards: [],
    });

    if (createAdmin) {
      res.status(200).json({ message: "Admin created" });
    } else {
      res.status(404).json({ error: "Failed to create admin!" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

//CREATE A CARD
router.post(
  "/create-card",
  cardValidation,
  adminTokenVerification,
  async (req, res) => {
    const cardInfo = req.parsedCardData;
    const adminUsername = req.adminData.username;

    try {
      const createCard = await Card.create({
        cardId: Date.now(),
        name: cardInfo.name,
        description: cardInfo.description,
        social: {
          linkedin: cardInfo.social.linkedin,
          Twitter: cardInfo.social.twitter,
        },
        interest: cardInfo.interest,
        createdBy: adminUsername,
      });

      if (createCard) {
        //add the new card to the user's collection of cards
        const addToAdminCards = await Admin.findOneAndUpdate(
          { username: adminUsername },
          { $push: { cards: createCard.cardId } }
        );
        if (!addToAdminCards) {
          res
            .status(404)
            .json({ error: "Failed to add card to Admin's collection" });
        } else {
          res.status(200).json({ message: "Card added to Admin's collection" });
        }
      } else {
        res.status(404).json({ error: "Cannot create Card in DB" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error!" });
    }
  }
);

//ADMIN UPDATE A CARD
router.put("/update-card", adminTokenVerification, async (req, res) => {
  const { cardId, updateData } = req.body;

  try {
    const adminUsername = req.adminData.username;

    // Check if the card exists and was created by the admin
    const card = await Card.findOne({ cardId, createdBy: adminUsername });
    if (!card) {
      return res
        .status(404)
        .json({ error: "Card not found or not created by the admin" });
    }

    // Update the card
    const updatedCard = await Card.findOneAndUpdate(
      { cardId: cardId, createdBy: adminUsername }, //Two filter search
      { $set: updateData }
    );

    return res.status(200).json({ updatedCard });
  } catch (error) {
    console.error("Error updating card:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
