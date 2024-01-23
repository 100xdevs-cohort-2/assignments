const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/todo-app");
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = todo;
