const express = require('express');
const app = express();
app.use(express.json());
const fs = require("fs")

/* 
   {
    "id": 14776,
    "title": "Buy groceries 0",
    "description": "I should buy groceries"
  },
  {
    "id": 36332,
    "title": "Buy groceries 1",
    "description": "I should buy groceries"
  },
  {
    "id": 25597,
    "title": "Buy groceries 2",
    "description": "I should buy groceries"
  }
*/
let todosArray = []

function findIndex(arr, id) {
    return arr.findIndex(item => item.id === id)
}

function removeAtIndex(arr, index) {
    return arr.splice(index, 1)
}


function getId() {
    let id = Math.floor(Math.random() * 100000)
    return id;
}


//get all todos
app.get("/todos", (req, res) => {
    fs.readFile("todos.json", "utf-8", (err, data) => {
        if (err) throw err;
        const todosArray = JSON.parse(data)
        res.json(todosArray)
    })
})

//get todo with a specific id
app.get("/todos/:id", (req, res) => {
    fs.readFile("todos.json", "utf-8", (err, data) => {
        if (err) throw data;
        const todosArray = JSON.parse(data)
        const todoIndex = findIndex(todosArray, parseInt(req.params.id))
        if (todoIndex === -1) {
            return res.status(404).send("Not Found")
        }
        else {
            return res.json(todosArray[todoIndex])
        }
    })


})

// create a new todo
app.post("/todos", (req, res) => {
    const newTodo = {
        id: getId(),
        title: req.body.title,
        description: req.body.description
    }

    fs.readFile("todos.json", "utf-8", (err, data) => {
        if (err) throw err;
        const todosArray = JSON.parse(data)
        todosArray.push(newTodo)

        fs.writeFile("todos.json", JSON.stringify(todosArray), (err) => {
            if (err) throw err;
            res.status(201).json(newTodo)
        })
    })
})

//update an existing todo with given id
app.put("/todos/:id", (req, res) => {
    fs.readFile("todos.json", "utf-8", (err, data) => {
        if (err) throw err;
        const todosArray = JSON.parse(data)
        const todoIndex = findIndex(todosArray, parseInt(req.params.id))

        if (todoIndex === -1) {
            return res.status(404).send("Not Found")
        }
        else {
            const newUpdatedTodo = {
                id: todosArray[todoIndex].id,
                title: req.body.title,
                description: req.body.description
            }
            todosArray[todoIndex] = newUpdatedTodo
            fs.writeFile("todos.json", JSON.stringify(todosArray), (err) => {
                if (err) throw err;
                res.status(200).json(newUpdatedTodo)
            })
        }
    })

})

//delete a todo with given id
app.delete("/todos/:id", (req, res) => {
    fs.readFile("todos.json", "utf-8", (err, data) => {
        if (err) throw err;
        const todosArray = JSON.parse(data)
        const todoIndex = findIndex(todosArray, parseInt(req.params.id))

        if (todoIndex === -1) {
            return res.status(404).send("Not Found")
        }
        else {
            removeAtIndex(todosArray, todoIndex)
            fs.writeFile("todos.json", JSON.stringify(todosArray), (err) => {
                if (err) throw err;
                res.status(200).send("deleted")
            })
        }
    })

})

app.use((req, res) => {
    return res.status(404).send("not found")
})

app.listen(3005, () => {
    console.log("listening on port 3000")
})

module.exports = app;

