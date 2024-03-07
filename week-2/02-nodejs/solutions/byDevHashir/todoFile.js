const express = require('express');
var fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const port = 3000;

function updateTodoFile(item){
    fs.writeFile("todos.json", JSON.stringify(item), function(err, result) {
    if(err) console.log('error', err);
    });
}

function getDataFromFile(){
    return new Promise((resolve, reject) => {
        if(fs.existsSync('todos.json')){
            const data = fs.readFile('todos.json',(err, data) => {
                if(err){
                    reject(err);
                }
                else{
                    // console.log("This is the OG Data: "+data);
                    // console.log("This is from getData: "+JSON.parse(data));
                    resolve(JSON.parse(data));
                }
            });
        }
        else{
            const data = [];
            fs.writeFile("todos.json",JSON.stringify(data),function(err, result) {
                if(err){
                    reject('error', err);
                }
                else{
                    resolve(data);
                }
                });
        }
    });
}


app.get('/todos', async (req, res) => {
    let todoList = await getDataFromFile();
    // console.log("From getTodos: "+todoList);
    res.status(200).json(todoList);
});

app.get('/todos/:id', async (req, res) => {
    let todoList = await getDataFromFile();
    let todo = todoList.find(item => item.id == req.params.id);
    if (todo){
        res.status(200).json(todo);
    }
    else{
        res.status(404).json({"Error": "Requested Item not found."});
    }
});

app.post('/todos', async (req, res) => {
    let newTodo = req.body;
    newTodo.id = Math.floor(Math.random() * 1000000);
    let todoList = await getDataFromFile();
    todoList.push(newTodo);
    updateTodoFile(todoList);
    res.status(201).json(newTodo);
});

app.put('/todos/:id', async (req, res) => {
    let todoList = await getDataFromFile();
    let index = todoList.findIndex(item => item.id == parseInt(req.params.id));
    if (index != -1){
        todoList[index] = {...todoList[index], ...req.body};
        updateTodoFile(todoList);
        res.status(200).json(todoList);
    }
    else{
        res.status(404).json({"Error": "Requested Item not found."});
    }
});

app.delete('/todos/:id', async (req, res) => {
    let todoList = await getDataFromFile();
    let index = todoList.findIndex(item => item.id == parseInt(req.params.id));
    if (index != -1){
        todoList.splice(index,1);
        updateTodoFile(todoList);
        res.status(200).json(todoList);
    }
    else{
        res.status(404).json({"Error": "Requested Item not found."});
    }
});

app.use((req, res, next) => {
    res.status(404).send();
});

// app.listen(port, (() => {
//     console.log(`app listening on port ${port}`);
// }))

module.exports = app;