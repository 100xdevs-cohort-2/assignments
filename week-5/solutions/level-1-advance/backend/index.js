const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { Card, validateCard } = require("./db");
const validateObjectId = require("./middleware/validateObjectId");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
// Create a new card
app.post("/api/cards", async (req, res) => {
	// Validate the Input
	const input = validateCard(req.body);
	if (!input.success) return res.status(400).send(input.error.message);

	try {
		const newCard = await Card.create(req.body);
		res.status(201).json(newCard);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
});

// Get all cards
app.get("/api/cards", async (req, res) => {
	try {
		const cards = await Card.find().sort({ name: 1 });
		// Return the genres
		res.status(200).json(cards);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
});

// Update a card
app.put("/api/cards/:id", validateObjectId, async (req, res) => {
	const { id } = req.params;
	// Validate the Input
	const input = validateCard(req.body);
	if (!input.success) return res.status(400).send(input.error.message);

	try {
		const updatedCard = await Card.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		if (!updatedCard)
			return res.status(404).send(`The card with the given ID was not found`);
		res.status(200).json(updatedCard);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
});

// Delete a card
app.delete("/api/cards/:id", validateObjectId, async (req, res) => {
	const { id } = req.params;

	try {
		const deletedCard = await Card.findByIdAndDelete(id);
		if (!deletedCard)
			return res.status(404).send(`The card with the given ID was not found`);

		res.status(204).end();
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
