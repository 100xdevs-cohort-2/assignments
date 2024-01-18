const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://harshavarthan749:0Ym99L3kZ6HujRsh@cluster0.reekcuo.mongodb.net/Todo')


const TodoSchema = new mongoose.Schema({
    todoId: {
             type: Number,
             required: true},
    todo: String
})

const Todo = mongoose.model('Todo', TodoSchema)

module.exports = {
    Todo
}