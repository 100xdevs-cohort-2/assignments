const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

let todoList = [
    {
        title: "going to gym",
        id: Date.now()
    }
];

app.get('/todos', (req, res) => {
    return res.json({
        "todos": todoList
    });
});

app.post("/addTodo", (req, res) => {
    const { title } = req.body;
    todoList.push({
        'title': title,
        id: Date.now()
    })
    return res.json({
        "todos": todoList
    });
});

app.delete('/deleteTodo', function (req, res) {
    const { id } = req.query;
    console.log(id)
    todoList.slice(id)
    return res.json({
        "todos": todoList
    });
})

app.put('/updateTodo', function (req, res) {
    const { id, title } = req.body;
    console.log(id)
    todoList[id].title = title
    return res.json({
        "todos": todoList
    });
})





app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});