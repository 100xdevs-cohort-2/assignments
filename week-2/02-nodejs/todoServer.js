const Joi = require('joi');
const express = require('express');

const todos = [];

const app = express();

app.use(express.json());

app.get('/todos',(req,res)=>{
  res.send(todos);
});

app.get('/todos/:id', (req,res)=>{
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if(!todo) return res.status(404).send('No todo with such ID');
  res.send(todo);
});

app.post('/todos',(req,res)=>{
  //vaidation of input
  const {error} = validateInput(req.body);
  if(error) return res.status(400).send(error.details[0].message);
  //creating an obj of todo
  const newTodo = {
    id: todos.length+1,
    title: req.body.title,
    description: req.body.description
  };
  //pushing it into the array
  todos.push(newTodo);
  res.status(201).send(newTodo);
});

app.put('/todos/:id',(req,res)=>{
  //finding the todo
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if(!todo) return res.status(404).send('No todo with such ID');
  //validating the input
  const {error} = validateInput(req.body);
  if(error) return res.status(400).send(error.details[0].message);
  //updating the todo by its index
  todo.title = req.body.title;
  todo.description = req.body.description;
  res.send(todo);
});

app.delete('/todos/:id',(req,res)=>{
  //finding the todo
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if(!todo) return res.status(404).send('No todo with such ID');
  //removing the todo by it's index
  const index = todos.indexOf(todo);
  todos.splice(index,1);
  res.status(200).send();
});


app.use((req, res, next) => {
  res.status(404).send();
});


// Function to validate the client input

function validateInput(body) {
  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    description: Joi.string().min(3).required()
  });
  return schema.validate(body);
}

module.exports = app;