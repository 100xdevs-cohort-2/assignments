const express = require('express');

const app = express();

app.use(express.json());
let todos = [];

app.get('/', (req, res) => {
    res.json(todos);
})

app.get('/todos/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if(!todo) {
        res.status(404).send();
    } else {
        res.status(200).send(todo);
    }
})

app.post('/todos', (req, res) => {
    const newTodo = {
        id: Math.floor(Math.random() * 1000),
        title: req.body.title,
        description: req.body.description
    }
    todos.push(newTodo);
    res.status(200).json(newTodo);
})

app.put('/todos/:id', (req, res) => {
    const todoIndex = todos.find(t => t.id === parseInt(req.params.id));
    if(todoIndex === -1) {
        res.status(404).send();
    } else {
        todos[todoIndex].title = req.body.title;
        todos[todoIndex].description = req.body.description;
        res.json(todos[todoIndex]);
    }
})

app.delete('/todos/:id', (req, res) => {
    const todoIndex = todos.find(t => t.id === parseInt(req.params.id));
    if(todoIndex === -1) {
        res.status(404).send();
    } else {
        todos.splice(todoIndex, 1);
        res.status(200).send();
    }
})

app.listen(3000);