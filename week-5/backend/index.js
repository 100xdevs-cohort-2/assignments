const express = require("express");
const app = express();

const port = 3000;

const TODO_DATA = [
  { id: 1, title: "to code", description: "do the cohort" },
  { id: 2, title: "to party", description: "do the party" },
];

app.use(express.json());

app.get("/", (req, res) => {});

app.get("/api/todos", (req, res) => {
  try {
    res.json(TODO_DATA);
  } catch (e) {
    res.json({ error: e });
  }
});

app.post("/api/todo", (req, res) => {
  const newTodo = req.body;
  // console.log(newTodo);
  TODO_DATA.push(newTodo);
  res.json(TODO_DATA);
});

app.get("/api/todos/:todoId", (req, res) => {
  const todoId = req.params.todoId;
  const selectedTodo = TODO_DATA.filter((todo) => {
    return todo.id == todoId;
  });
  res.json(selectedTodo);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
