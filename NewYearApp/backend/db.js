const mongoose = require("mongoose");




mongoose.connect("mongodb+srv://krishsoni:krishsoni@auth.heqtbow.mongodb.net/")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}
