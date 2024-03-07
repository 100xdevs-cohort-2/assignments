const express = require('express');
const winston = require('winston');
var fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const port = 3000;
const dbFileName = 'todos.json';

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

function getFallBackData(){
    // Implement fallback mechanism or provide alternative data here
    logger.warn('Falling back to alternative data...');
    return [];
}

function updateTodoFile(item = []){
    return new Promise((resolve, reject) => {
        fs.writeFile(dbFileName,JSON.stringify(item),function(err, data) {
            if(err){
                reject({
                    code: 'FILE_WRITE_ERROR',
                    message: `Error writing to file: ${dbFileName}`,
                    error: err
                });
            }
            else{
                if( item.length === 0 ){
                    logger.info("No existing records, Created an empty list.");
                }
                resolve(item);
            }
        });
    })
}

function getDataFromFile(){
    return new Promise((resolve, reject) => {
        if(fs.existsSync(dbFileName)){
            const shouldFail = Math.random() < 0.5; //Simulating transcient error by randomly failing.
            if(shouldFail){
                reject({
                    code: 'TRANSIENT_ERROR',
                    message: `Simulated transient error while reading file: ${dbFileName}`,
                    error: `shouldFail is ${shouldFail}`
                });
            } else {
                fs.readFile(dbFileName,(err, data) => {
                    if(err){
                        reject({
                            code: 'FILE_READ_ERROR',
                            message: `Error reading file: ${dbFileName}`,
                            error: err
                        });
                    }
                    else{
                        try{
                            logger.info("This is the OG Data: "+data);
                            logger.info("This is from getData: "+JSON.parse(data));
                            resolve(JSON.parse(data));
                        } catch(anyErrorWhileParsing){
                            reject({
                                code: 'JSON_PARSE_ERROR',
                                message: `Error parsing JSON data from file: ${dbFileName}`,
                                error: err
                            });
                        }
                    }
                });
            }
        }
        else{
            updateTodoFile().then(resolve).catch(reject); // Chain the promises
        }
    });
}

async function getDataFromFileWithRetry(){
    let retries = 3;
    let delay = 1000;

    while(retries >0){
        try{
            const data = await getDataFromFile();
            return data;
        }
        catch(error){
            if(error.code == 'TRANSIENT_ERROR'){
                logger.error({
                    code: 'RETRY_DUE_TO_TRANSIENT_ERROR',
                    message: `Transient error occurred, retrying...`,
                    error: error.error
                });
                await new Promise(resolve => setTimeout(resolve, delay));
                retries--;
            } else {
                throw error;
            }
        }
    }
    // If retries exhausted without success, degrade gracefully
    logger.error({
        code: 'CRITICAL_ERROR_AFTER_RETRIES',
        message: `Operation failed after ${retries} retries due to transient errors. Gracefully degrading functionality...`,
        error: 'Data fetch failed'
    });

    return getFallBackData();
}

app.get('/todos', async (req, res) => {
    let todoList = await getDataFromFileWithRetry();
    logger.info("From getTodos: "+todoList);
    res.status(200).json(todoList);
});

app.get('/todos/:id', async (req, res) => {
    let todoList = await getDataFromFileWithRetry();
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
    let todoList = await getDataFromFileWithRetry();
    todoList.push(newTodo);
    updateTodoFile(todoList);
    res.status(201).json(newTodo);
});

app.put('/todos/:id', async (req, res) => {
    let todoList = await getDataFromFileWithRetry();
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
    let todoList = await getDataFromFileWithRetry();
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