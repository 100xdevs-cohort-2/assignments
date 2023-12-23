const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());

function findIndex(arr,id){
    for(let i=0;i<arr.length;i++){
        if(arr[i].id===id) return i;
    }
    return -1;
}

function removeAtIndex(arr,index){
    let newArray = [];
    for(let i=0;i<arr.length;i++){
        if(i!==index) newArray.push(arr[i]);
    }
    return newArray;
}

app.get('/todos',(req,res)=>{
    fs.readFile('todos.json','utf-8',(err,data)=>{
        if(err) throw err;
        res.json(JSON.parse(data));
    });
});

app.get('/todos/:id', (req,res)=>{
    fs.readFile('todos.json','utf-8',(err,data)=>{
        if(err) throw err;
        const todos = JSON.parse(data);
        const todoIndex = findIndex(todos,parseInt(req.params.id));
        if(todoIndex===-1){
            return res.status(404).send();
        }
        return res.status(200).send(todos[todoIndex]);
    });
});

app.post('/todos',(req,res)=>{
    const newTodo = {
        id: Math.floor(Math.random()*1000000), //unique id
        title:req.body.title,
        description:req.body.description,
        isCompleted:req.body.isCompleted
    }
    fs.readFile('todos.json','utf-8',(err,data)=>{
        if(err) throw err;
        const todos = JSON.parse(data);
        todos.push(newTodo);
        fs.writeFile('todos.json', JSON.stringify(todos),(err)=>{
            if(err) throw err;
            res.status(201).json(newTodo);
        });
    });
});

app.put('/todos/:id',(req,res)=>{
    fs.readFile('todos.json','utf-8',(err,data)=>{
        if(err) throw err;
        const todos = JSON.parse(data);
        const todoIndex = findIndex(todos,parseInt(req.params.id));
        if(todoIndex===-1){
            return res.status(404).send();
        }
        const updatedTodo = {
            id:todos[todoIndex].id,
            title:req.body.title,
            description:req.body.description,
            isCompleted:req.body.isCompleted
        }
        todos[todoIndex] = updatedTodo;

        fs.writeFile('todos.json', JSON.stringify(todos),(err)=>{
            if(err) throw err;
            res.status(200).json(updatedTodo);
        });
    });
});

app.delete('/todos/:id',(req,res)=>{
    fs.readFile('todos.json','utf-8',(err,data)=>{
        if(err) throw err;
        const todos = JSON.parse(data);
        const todoIndex = findIndex(todos,parseInt(req.params.id));
        const updatedTodo = removeAtIndex(todos,todoIndex);

        fs.writeFile('todos.json',JSON.stringify(updatedTodo),(err)=>{
            if(err) throw err;
            res.status(200).send();
        }); 
    });
});

app.listen(3000);

