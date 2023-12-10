const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//
let todo = [
  {
    id: 1,
    title: "todo 1",
    completed: false,
  },
  {
    id: 2,
    title: "todo 2",
    completed: true,
  },
  {
    id: 3,
    title: "todo 3",
    completed: false,
  },
];

app.get("/todo", (req, res) => {
  res.json(todo);
});

app.post("/todo", (req, res) => {
  const newTodo = req.body;
  newTodo.id = todo.length + 1;
  todo.push(newTodo);
  res.json(newTodo);
});

app.put("/todo/:id", (req, res) => {
  const id = req.params.id;
  const newTodo = req.body;
  const index = todo.findIndex((todo) => todo.id == id);
  todo[index] = newTodo;
  res.json(newTodo);
});

app.delete("/todo/:id", (req, res) => {
  const id = req.params.id;
  const index = todo.findIndex((todo) => todo.id == id);
  todo.splice(index, 1);
  res.json(todo);
});

app.get("/todo/:id", (req, res) => {
  const id = req.params.id;
  const index = todo.findIndex((todo) => todo.id == id);
  res.json(todo[index]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
