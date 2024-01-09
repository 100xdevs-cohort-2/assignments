const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Card = require("./models/cardModel");
const app = express();
app.use(cors());
app.use(express.json());
mongoose
  .connect(
    "mongodb+srv://karthickbharathi15:NlFi7VbGyAW5Mdg1@cluster0.twe85bb.mongodb.net/cards"
  )
  .then(() => console.log("Connetced to database successfully"));

app.get("/cards", async (req, res) => {
  try {
    const cards = await Card.find();
    res.json({
      cards: cards,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/cards", async (req, res) => {
  const { name, description, socialMeidaHandles, interests } = req.body;
  const newCard = await Card.create({
    name: name,
    description: description,
    socialMeidaHandles: socialMeidaHandles,
    interests: interests,
  });
  res.json(newCard);
});

app.listen(3000, () => {
  console.log("app is listenig to port");
});
