const mongoose = require("mongoose");
const zod = require("zod");

// MongoDB Connection
const db = "your_mongo_db_connection_string";
mongoose
	.connect(db)
	.then(() => console.log(`Connected to MongoDB...`))
	.catch((err) => console.log(`Could not connect to MongoDB...`, err));


// Defining Schema
const cardSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlenght: 2,
		maxlenght: 255,
	},
	description: {
		type: String,
		maxlenght: 1024,
  },
	linkedin: String,
	twitter: String,
	github: String,
	interests: {
    type: String,
    maxlenght: 1024,
  },
});


// Creating a model
const Card = mongoose.model("Card", cardSchema);


// Validation Logic
const validateCard = (card) => {
	const schema = zod.object({
		name: zod.string().min(2).max(50),
		description: zod.string().max(1024).optional(),
		linkedin: zod.string().optional(),
		twitter: zod.string().optional(),
		github: zod.string().optional(),
		interests: zod.string().max(1024).optional(),
	});

	return schema.safeParse(card);
};

module.exports = {
	Card,
	validateCard,
}
