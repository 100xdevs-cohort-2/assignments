const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://raghavgpt001:Pneumono%40001424@cluster0.routrrf.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports={
    todo
}