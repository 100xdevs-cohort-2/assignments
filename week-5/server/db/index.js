const mongoose = require("mongoose");

//connecting to MongoDB
mongoose.connect("connection_string");


//Schema defination 
const CardSchema = new mongoose.Schema({
    //The card should be Unique, displaying the name,description,profilelinks and interests.

    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    interest: {
        type: String,
        required: true,
    },
    linkedin_Link: {
        type: String,
        required: true,
    },
    twitter_link: {
        type: String,
        required: true,
    }
})

const Card = mongoose.model("Card",CardSchema);

module.exports = {
    Card,
}