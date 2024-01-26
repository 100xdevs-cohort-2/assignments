const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://manishkt65:Mk%40408576@cluster0.0c6jnot.mongodb.net/todo_app"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: {
    type: Boolean,
    default: false,
  },
});

const todo = mongoose.model("todos", todoSchema);
module.exports = {
  todo,
};
