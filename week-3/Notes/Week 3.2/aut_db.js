const mongoose = require("mongoose");
const express = require("express");

const DB_URL = "mongodb+srv://admin:8iCWU1da3aUJTPoq@cluster0.ckvbael.mongodb.net/learning_app"

const app = express();
app.use(express.json());

mongoose.connect(DB_URL)
// Define a User model
const User = mongoose.model("Users", {
    name: String,
    email: String,
    password: String,
});

app.post("/signup", async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const existingUser = await User.findOne({
        email: email
    });
    console.log(existingUser);
    if (existingUser) {
        return res.status(400).json({
            msg: "User already exists",
        });
    }
    const user = new User({
        name: name,
        email: email,
        password: password,
    });

    user.save();
    res.json({
        msg: "User created successfully",
    });
});

app.listen(3000);