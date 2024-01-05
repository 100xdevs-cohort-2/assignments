const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;

app.use(bodyParser.json());

let todos = [];

app.get("/todos", (req, res) => {
    res.status(200).json(todos);
});

app.get("/todos/:id", (req, res) => {
    const todo = todos.find((t) => t.id === parseInt(req.params.id));

    if (!todo) {
        res.status(404).json({
            success: false,
            message: "Todo not found",
        });
    }

    res.status(200).json(todo);
});

app.post("/todos", (req, res) => {
    const newTodo = {
        id: Math.floor(Math.random() * 1000000),
        title: req.body.title,
        completed: req.body.completed,
        description: req.body.description,
    };

    todos.push(newTodo);
    res.status(201).json({
      success: true,
      id: newTodo.id,
    });
});

app.put("/todos/:id", (req, res) => {
    const todoIndex = todos.findIndex((t) => t.id === parseInt(req.params.id));

    if (todoIndex === -1) {
        res.status(404).json({
          success: false,
          message: "Todo not found",
        });
    }

    todos[todoIndex].title = req.body.title;
    todos[todoIndex].completed = req.body.completed;
    todos[todoIndex].description = req.body.description;

    res.status(200).send({
      success: true,
      data: todos[todoIndex],
    });
});

app.delete("/todos/:id", (req, res) => {
    const todoIndex = todos.findIndex((t) => t.id === parseInt(req.params.id));

    if (todoIndex === -1) {
        res.status(404).json({
          success: false,
          message: "Todo not found",
        });
    }

    todos.splice(todoIndex, 1);
    res.status(200).json({
      success: true,
      message: "Todo deleted",
    });
});

app.use((req, res, next) => {
    res.status(404).send();
});

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}/`);
// });

module.exports = app;
