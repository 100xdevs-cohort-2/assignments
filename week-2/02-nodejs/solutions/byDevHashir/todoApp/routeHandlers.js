// routeHandlers.js
const express = require('express');
const logger = require('./logger');
const { updateTodoFile, getDataFromFileWithRetry } = require('./dataAccess');

const app = express();
app.use(express.json());

app.get('/todos', async (req, res) => {
    try {
        let todoList = await getDataFromFileWithRetry();
        logger.info("From getTodos: " + todoList);
        res.status(200).json(todoList);
    } catch (error) {
        logger.error({
            code: 'TODO_FETCH_FAILED',
            message: `Failed to retrieve todo list`,
            error: error
        });
        res.status(500).json({ "error": "Failed to retrieve todo list" });
    }
});

app.get('/todos/:id', async (req, res) => {
    try{
        let todoList = await getDataFromFileWithRetry();
        let todo = todoList.find(item => item.id == req.params.id);
        if (todo){
            logger.info("Retrieved todo successfully:", todo);
            res.status(200).json(todo);
        }
        else{
            logger.warn("Requested item not found with id: ", req.params.id);
            res.status(404).json({"Error": "Requested Item not found."});
        }
    }
    catch(error){
        logger.error({
            code: 'TODO_ITEM_FETCH_FAILED',
            message: `Failed to retrieve todo list with id: ${req.params.id}`,
            error: error
        });
        res.status(500).json({"error": "Failed to retrieve todo item with id:"+req.params.id});
    }
});

app.post('/todos', async (req, res) => {
    try{
        let newTodo = req.body;
        newTodo.id = Math.floor(Math.random() * 1000000);
        let todoList = await getDataFromFileWithRetry();
        todoList.push(newTodo);
        updateTodoFile(todoList);
        logger.info("Added new todo:"+newTodo);
        res.status(201).json(newTodo);
    }
    catch(error){
        logger.error({
            code: 'TODO_ITEM_INSERTION_FAILED',
            message: `Failed to insert new todo to list `,
            error: error
        });
        res.status(500).json({"error": "Failed to insert new todo to list"});  
    }
    
});

app.put('/todos/:id', async (req, res) => {
    try {
        const todoList = await getDataFromFileWithRetry();
        const index = todoList.findIndex(item => item.id == parseInt(req.params.id));
        if (index !== -1) {
            todoList[index] = { ...todoList[index], ...req.body };
            await updateTodoFile(todoList);
            logger.info("Updated todo:", todoList[index]);
            res.status(200).json(todoList);
        } else {
            logger.warn("Todo item not found with ID:", req.params.id);
            res.status(404).json({ error: "Todo item not found." });
        }
    } catch (error) {
        logger.error({
            code: 'TODO_ITEM_UPDATION_FAILED',
            message: `Failed to update todo with id: ${req.params.id}to list `,
            error: error
        });
        res.status(500).json({ error: "Failed to update todo item." });
    }
});

app.delete('/todos/:id', async (req, res) => {
    try {
        const todoList = await getDataFromFileWithRetry();
        const index = todoList.findIndex(item => item.id == parseInt(req.params.id));
        if (index !== -1) {
            todoList.splice(index, 1);
            await updateTodoFile(todoList);
            logger.info("Deleted todo item with ID:", req.params.id);
            res.status(200).json(todoList);
        } else {
            logger.warn("Todo item not found with ID:", req.params.id);
            res.status(404).json({ error: "Todo item not found." });
        }
    } catch (error) {
        logger.error({
            code: 'TODO_ITEM_DELETE_FAILED',
            message: `Failed to delete todo with id: ${req.params.id} `,
            error: error
        });
        // logger.error("Failed to delete todo item:", error);
        res.status(500).json({ error: "Failed to delete todo item with id: "+req.params.id});
    }
});

module.exports = app;
