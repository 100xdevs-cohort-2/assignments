const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://harshavarthan749:0Ym99L3kZ6HujRsh@cluster0.reekcuo.mongodb.net/BusinessCard")

const CardSchema = new mongoose.Schema({
    cardId: {
        type: Number,
        required: true
    },
    name: String,
    group: String,
    interest: String
})

const Card = mongoose.model('card', CardSchema)

module.exports = {
    Card
}