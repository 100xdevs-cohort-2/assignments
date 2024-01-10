const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const filePath = path.join(__dirname,'todos.json');

app.use(bodyParser.json());

function findIndex(arr,id) {
  for(let i=0; i<arr.length; i++) {
    if(arr[i].id === id) return i;
  }
  return -1;
}

function removeAtIndex(arr,id) {
  let newArray = [];
  for(let i=0; i<arr.length; i++) {
    if(i !== id) newArray.push(arr[i]);
  }
  return newArray
}

app.get('/todos',(req,res)=>{
  fs.readFile(filePath,'utf-8',(err,data)=>{
    if(err) throw err;
    res.json(JSON.parse(data));
  });
});

app.get('/todos/:id',(req,res)=>{
  fs.readFile(filePath,'utf-8',(err,data)=>{
    if(err) throw err;
    const todos = JSON.parse(data);
    const index = findIndex(todos,parseInt(req.params.id));
    if(index === -1) {
      res.status(404).send();
    } else {
      res.json(todos[index]);
    }
  });
});

app.post('/todos',(req,res)=>{
  const newTodo = {
    id: Math.floor(Math.random()*100),
    title: req.body.title,
    description: req.body.description
  };
  fs.readFile(filePath,'utf-8',(err,data)=>{
    if(err) throw err;
    let todos = JSON.parse(data);
    todos.push(newTodo);
    fs.writeFile(filePath,JSON.stringify(todos),(err)=>{
      if(err) throw err;
      res.status(201).json(newTodo);
    });
  });
});

app.put('/todos/:id',(req,res)=>{
  fs.readFile(filePath,'utf-8',(err,data)=>{
    if(err) throw err;
    let todos = JSON.parse(data);
    let index = findIndex(todos,parseInt(req.params.id));
    if(index === -1) {
      res.status(404).send();
    } else {
      const updatedTodo = {
        id: todos[index].id,
        title: req.body.title,
        description: req.body.description
      };
      todos[index] = updatedTodo;
      fs.writeFile(filePath,JSON.stringify(todos),(err)=>{
        if(err) throw err;
        res.status(201).json(updatedTodo);
      });
    }
  });
});

app.delete('/todos/:id',(req,res)=>{
  fs.readFile(filePath,'utf-8',(err,data)=>{
    if(err) throw err;
    let todos = JSON.parse(data);
    let index = findIndex(todos,parseInt(req.params.id));
    if(index === -1) {
      res.status(404).send();
    } else {
      todos = removeAtIndex(todos,index);
      fs.writeFile(filePath,JSON.stringify(todos),(err)=>{
        if(err) throw err;
        res.status(200).send();
      });
    }
  });
});

app.use((req,res,next)=>{
  res.status(404).send();
});

const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listening on the port ${port}`));