const mongoose = require("mongoose");

//connecting to MongoDB
mongoose.connect("mongodb://vasanth24ias:ZeLfuxzhAXkvVKG5@ac-sd0kvcd-shard-00-00.afpnqmj.mongodb.net:27017,ac-sd0kvcd-shard-00-01.afpnqmj.mongodb.net:27017,ac-sd0kvcd-shard-00-02.afpnqmj.mongodb.net:27017/?replicaSet=atlas-14jgl6-shard-0&ssl=true&authSource=admin");


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