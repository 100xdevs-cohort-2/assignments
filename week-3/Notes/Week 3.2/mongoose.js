// Import the mongoose library
const mongoose = require("mongoose");

// Define the URL of your MongoDB database
const DB_URL = "mongodb+srv://admin:8iCWU1da3aUJTPoq@cluster0.ckvbael.mongodb.net/learning_app"

// Connect to your MongoDB database
mongoose.connect(DB_URL)

// Define a User model
const User = mongoose.model("Users", {
    name: String,
    email: String,
    password: String,
});

// Create an instance
const user = new User({
    name: "Shivam Kumar",
    email: "shivam@gmail.com",
    password: "123456",
});

// Save the new instance to the database
user.save();