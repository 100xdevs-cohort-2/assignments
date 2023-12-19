const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();
const { v4: uuidv4 } = require("uuid");
app.use(bodyParser.json());

app.get("/todos", function (req, res) {
  fs.readFile("todos.json", "utf-8", function (err, data) {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

app.get("/todos/:id", function (req, res) {
  const { id } = req.params;
  fs.readFile("todos.json", "utf-8", (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data);
    const todo = todos.find((todo) => todo.id === id);
    console.log(todo);
    res.json(todo);
  });
});

app.post("/todos", function (req, res) {
  const newTodo = {
    id: uuidv4(),
    title: req.body.title,
    description: req.body.description,
  };
  fs.readFile("todos.json", "utf-8", (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data);
    todos.push(newTodo);
    fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
      if (err) throw err;
      res.status(201).json(newTodo);
    });
  });
});

app.put("/todos/:id", function (req, res) {
  const { id } = req.params;
  const { title, description } = req.body;
  fs.readFile("todos.json", "utf-8", (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data);
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) res.status(404).send("Not Found!!");
    todo.title = title;
    todo.description = description;
    fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
      if (err) throw err;
      res.send("Updated!!");
    });
  });
});

app.delete("/todos/:id", function (req, res) {
  const { id } = req.params;
  fs.readFile("todos.json", "utf-8", (err, data) => {
    let todos = JSON.parse(data);
    let newTodos = todos.filter((todo) => todo.id !== id);
    todos = newTodos;
    fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
      if (err) throw err;
      res.send("Deleted!!");
    });
  });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
