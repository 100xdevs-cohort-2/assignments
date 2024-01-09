const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.use(bodyParser.json());

function findIndex(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) return i;
  }
  return -1;
}
function deleteIndex(arr, id) {
  let newTodos = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id != id) {
      newTodos.push(arr[i]);
    }
  }
  return newTodos;
}

app.get("/todos", (req, res) => {
  fs.readFile("todos.json", "utf-8", (err, data) => {
    res.json(JSON.parse(data));
  });
});

app.get("/todos/:id", (req, res) => {
  console.log("get called");
  fs.readFile("todos.json", "utf-8", (err, data) => {
    if (err) res.send(err);
    const todos = JSON.parse(data);
    const todoIndex = findIndex(todos, parseInt(req.params.id));
    if (todoIndex === -1) {
      res.status(404).send();
    } else {
      res.json(todos[todoIndex]);
    }
  });
});

app.post("/todos", (req, res) => {
  fs.readFile("todos.json", "utf-8", (err, data) => {
    const newTodo = {
      id: Math.floor(Math.random() * 10000000) + 1,
      title: req.body.title,
      description: req.body.description,
    };
    const todos = JSON.parse(data);

    todos.push(newTodo);

    fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
      if (err) throw err;
      res.status(201).json(newTodo);
    });
  });
});

app.put("/todos/:id", (req, res) => {
  fs.readFile("todos.json", "utf-8", (err, data) => {
    const id = parseInt(req.params.id);
    const newtodo = {
      id: id,
      title: req.body.title,
      description: req.body.description,
    };
    const todos = JSON.parse(data);
    const todoIndex = findIndex(todos, parseInt(req.params.id));
    todos[todoIndex] = newtodo;
    fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
      if (err) throw err;
      res.status(201).json(newtodo);
    });
  });
});

app.delete("/todos/:id", (req, res) => {
  fs.readFile("todos.json", "utf-8", (err, data) => {
    const todos = JSON.parse(data);
    const updatedTodos = deleteIndex(todos, parseInt(req.params.id));
    fs.writeFile("todos.json", JSON.stringify(updatedTodos), (err) => {
      if (err) throw err;
      res.status(201).json(updatedTodos);
    });
  });
});

app.listen(3000, () => {
  console.log("SERVER IS LISTENING AT PORT 3000");
});
module.exports = app;
