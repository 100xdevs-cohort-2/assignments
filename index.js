const express = require('express');
const bodyParser = require('body-parser');
const app = express();
let todoList = [];

app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send('Hello world');
    console.log(todoList);
});
app.post('/todo', function (req, res) {
    const doesExist = todoList.find(todo => todo.id == req.body.id);
    if(doesExist){
        updateTodo(req, doesExist);
        res.send("updated successfully");
    }
    else{
        todoList.push(req.body);
        res.send("Added successfully!");
    }
});
app.post('/getTodo', function(req, res){
    const doesExist = todoList.find(todo => todo.id == req.body.id);
    if(doesExist){
        res.send(doesExist);
        console.log('todo exists');
    }
    else{
        res.send("todo doesnot exist");
        console.log("todo doesnot exist");
    }
});

app.post('/delete', function(req, res){
    const doesExist = todoList.find(todo => todo.id == req.body.id);
    if(doesExist){
        deleteTodo(doesExist);
        res.send("deleted successfully");
    }
    else{
        res.send('no todo');
        console.log("no todo");
    }
});

function deleteTodo(doesExist){
    todoList.splice(todoList.indexOf(doesExist), 1);
    console.log("deleted successfully");
}
// Updates todoList
function updateTodo(req, doesExist){
    todoList[todoList.indexOf(doesExist)] = req.body;
    console.log("Updated todo");
}

app.listen(3000)
