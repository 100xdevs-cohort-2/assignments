const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:02041996@practisecluster.agvl9l9.mongodb.net/Todo_DB?retryWrites=true&w=majority"
);

const TodoSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  completed: Boolean,
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const Todo = mongoose.model("Todo", TodoSchema);
const User = mongoose.model("User", userSchema);

module.exports = {
  Todo,
  User,
};
