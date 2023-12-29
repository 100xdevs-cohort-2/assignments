const express = require('express');
const bodyParser = require('body-parser');
const fs = require("fs");

const app = express();

app.use(bodyParser.json());

function findIndex(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) return i;
  }
  return -1;
}

function removeAtIndex(arr, index) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== index) newArray.push(arr[i]);
  }
  return newArray;
}

app.get('/todos', (req, res) => {
  fs.readFile("todos.json", "utf8", function (err, data) {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

app.get('/todos/:id', (req, res) => {
  fs.readFile("todos.json", "utf8", function (err, data) {
    if (err) throw err;
    const todos = JSON.parse(data);
    const todoIndex = findIndex(todos, parseInt(req.params.id));
    if (todoIndex === -1) {
      res.status(404).send();
    } else {
      res.json(todos[todoIndex]);
    }
  });
});
let nextTodoId = 1;
app.post('/todos', function (req, res) {

  const { title, completed, description } = req.body;

  // Validate request body
  if (!title || typeof completed !== 'boolean' || !description) {
    return res.status(400).json({ error: 'Invalid request body' });
  }

  // Create new todo item
  const newTodo = {
    id: nextTodoId++,
    title,
    completed,
    description,
  };

  fs.readFile("todos.json", "utf8", (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data);
    todos.push(newTodo);
    fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
      if (err) throw err;
      res.status(201).json(newTodo);
    });
  });
});

app.put('/todos/:id', function (req, res) {

  fs.readFile("todos.json", "utf8", (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data); // Parse the JSON string to an array

    const todoId = parseInt(req.params.id);
    const { title, completed } = req.body;

    // Find todo by ID
    const todoToUpdateIndex = todos.findIndex(todo => todo.id === todoId);

    // If todo not found, respond with 404
    if (todoToUpdateIndex === -1) {
      return res.status(404).json({ error: 'Todo not found' });
    } else {

      // Update todo properties
      todos[todoToUpdateIndex].title = title || todos[todoToUpdateIndex].title;
      todos[todoToUpdateIndex].completed = typeof completed === 'boolean' ? completed : todos[todoToUpdateIndex].completed;

      fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
        if (err) throw err;
        res.status(200).json(todos[todoToUpdateIndex]);
      });
    }
  });
});


app.delete('/todos/:id', function (req, res) {

  fs.readFile("todos.json", "utf8", (err, data) => {
    if (err) throw err;
    let todos = JSON.parse(data);
    const todoIndex = findIndex(todos, parseInt(req.params.id));
    if (todoIndex === -1) {
      res.status(404).send();
    } else {
      todos = removeAtIndex(todos, todoIndex);
      fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
        if (err) throw err;
        res.status(200).send();
      });
    }
  });
});

// for all other routes, return 404
app.use((req, res, next) => {
  res.status(404).send();
});

module.exports = app;