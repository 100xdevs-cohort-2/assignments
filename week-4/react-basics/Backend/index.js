const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const { createTodo, deleteTodo, updateTodo } = require('./types')
const { todo } = require('./mongodb')

app.use(cors())
app.use(express.json());

app.get('/todos', async (req, res) => {
    const todos =  await todo.find({})
    res.json({todos})
})

app.post('/todo',async (req, res) => {
    const createPayload = req.body
    const parsePayload = createTodo.safeParse(createPayload)
    if (!parsePayload.success){
        res.status(411).json({
            msg: 'You sent the wrong input'
        })
        return
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: 'Todo created'
    })
})

app.put('/completed/:id', async (req, res) => {
    const todoId = req.params.id;
    console.log(todoId)
    const parsePayload = updateTodo.safeParse({id: todoId});
    if (!parsePayload.success){
        res.status(400).json({
            msg: 'You sent the wrong input',
            // Inportant for debugin
            errors: parsePayload.error.issues
        });
        return;
    }

    await todo.findByIdAndUpdate(todoId, { completed: true });
    res.json({
        msg: "Todo completed"
    });
});

app.delete('/delete/:id', async (req, res) => {
    const todoId = req.params.id;
    const parsePayload = deleteTodo.safeParse({id: todoId});
    if (!parsePayload.success){
        res.status(400).json({
            msg: "Wrong input for delete"
        });
        return;
    }

    await todo.findByIdAndDelete(todoId);
    res.json({
        msg: "Todo deleted"
    });
});

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
}) 