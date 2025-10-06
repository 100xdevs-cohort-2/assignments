const express = require("express");
const { createCard } = require("./type");
const card = require("./db");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/cards", async function(req, res) {
    const createPayload = req.body;
    const parsePayload = createCard.safeParse(createPayload);

    if(!parsePayload.success) {
        return res.status(411).json({msg: "you sent wrong input"});
    }

    await card.create({
        name: createPayload.name,
        description: createPayload.description,
        interests: createPayload.interests,
        social: createPayload.social
    })

    res.status(200).json({msg: "card created"});
})

app.get("/cards", async function(req, res) {
    const cards = await card.find({});
    res.json({cards});
})

app.listen(3000);