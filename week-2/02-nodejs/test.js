// // const express = require('express');
// // const fs = require('fs');
// // const path = require('path');
// // const app = express();


// // const folder = './files';

// // app.get('/files', (req, res) => {
// //   fs.readdir(`${folder}`, (err, files) => {
// //     if(err){
// //       res.status(500).send('internal server error');
// //     }
// //     else{
// //       res.status(200).json(files);
// //     }
// //   })
// // })

// // app.get('/file/:filename', (req, res) => {
// //   const name = req.params.filename;
// //   fs.readFile(`${folder}/${name}`, 'utf-8', (err, data) => {
// //     if(err){
// //       res.status(404).send('File not found');
// //     }else{
// //       res.status(200).json(data);
// //     }
// //     })
// //   })



// // app.listen(3000);


// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const app = express();

// app.get()

// // app.use(bodyParser.json());

// // app.listen(3000);

// let todo = [{id: 1, name: "nothing" }, {id: 2, name: "nothing2" }, {id: 3, name: "nothing3" }]

// todo.filter((e) => {
//     if(e.id === 2) {
//         console.log(e); 
//         return;
//     }
//     else {
//         console.log("Not found")
//     };
// })


const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let todoList = [];
let todoCount = 1;

app.get('/todos', (req, res) => {
    res.status(200).json(todoList);
})

app.get('/todos/:id', (req, res) => {
    const id = req.params.id;
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id == id) {
            res.status(200).json(todoList[i]);
            return;
        }
    }
    res.status(404).send()
})

app.post('/todos', (req, res) => {
    const userTodo = req.body;
    const newTodo = {
        id: todoCount,
        completed: false,
        title: userTodo.title,
        description: userTodo.description
    }
    todoList.push(newTodo);
    todoCount += 1;
    res.status(200).send();
})

app.put('/todos/:id', (req, res) => {
    const id = req.params.id;
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id == id) {
            todoList[i].title = req.body.title;
            todoList[i].completed = req.body.completed;
            res.status(200).send();
            return;
        }
    }
    res.status(404).send("Not found");
})

app.delete('/todos/:id', (req, res) => {
    const id = req.params.id;
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id == id) {
            todoList.splice(i, 1);
            res.status(200).send();
            return;
        }
    }
    res.status(404).send("Not found");
})

app.use((req, res, next) => {
    res.status(404).send();
});

app.listen(3000);