const express = require('express');
const winston = require('winston');
var fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const port = 3000;

// Configure Winston logger
const logger = winston.createLogger({
    level: 'info', // Set the minimum log level
    format: winston.format.json(), // Choose the log format
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }), // Log errors to error.log
        new winston.transports.File({ filename: 'combined.log' }) // Log all messages to combined.log
    ]
});

// Add console transport for logging to console during development
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }));
}


// Determine the environment
if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'development'; // Default to development environment if NODE_ENV is not set
}

// Log the environment
logger.info('Running in', process.env.NODE_ENV, 'environment');

function updateTodoFile(item){
    fs.writeFile("todos.json", JSON.stringify(item), function(err, result) {
    if(err) logger.error('error', err);
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
                    logger.info("This is the OG Data: "+data);
                    logger.info("This is from getData: "+JSON.parse(data));
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
    logger.info("From getTodos: "+todoList);
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
//     logger.info(`app listening on port ${port}`);
// }))

module.exports = app, logger;