const express = require('express')

const {TodoObject} = require('./Validate')

const {Todo} = require('./db')
const cors = require('cors')
const app = express()

const port = 3000

app.use(cors())
app.use(express.json())

const counter = 0

app.post("/todo", async(req,res)=>{

    const parsedData = TodoObject.safeParse(req.body)
    const todoscount = await Todo.countDocuments()

    if(parsedData.success){
        const newTodo = await Todo.create({
            todoId: todoscount,
            todo: req.body.todo
        })
    
        res.status(200).json({newTodo})
    }
    else{
        res.status(404).json({
            msg: "not good"
        })
    }

})


app.get("/todos", async(req, res)=>{
    const todos = await Todo.find({})

  
    const processedTodos = todos.map(({todoId, todo}) => ({todoId, todo}))

    res.status(200).json({
        processedTodos
    })
})

app.get("/todos/:todoId", async(req, res)=>{
    const findtodoId = parseInt(req.params.todoId)

    const selectedTodos = await Todo.findOne({todoId: findtodoId} )


    res.status(200).json({
        Id: selectedTodos.todoId,
        Todos: selectedTodos.todo
    })
})

app.delete("/todos/:todoId", async(req, res)=>{
    const specId = parseInt(req.params.todoId)

    await Todo.deleteOne({
        todoId: specId
    })

    const todos = await Todo.find({})

    const processedTodos = todos.map(({todoId, todo}) => ({todoId, todo}))


    res.status(200).json({
        processedTodos
    })
})



app.delete("/todos", async(req, res)=>{
    await Todo.deleteMany({})

    res.json(200).json({

    })
})


app.listen(port, ()=>{
    console.log(`Your app is listening at ${port}`)
})