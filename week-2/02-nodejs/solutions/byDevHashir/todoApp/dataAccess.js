// dataAccess.js
const fs = require('fs');
const logger = require('./logger');
const dbFileName = 'todos.json';

function getFallBackData() {
    // Implement fallback mechanism or provide alternative data here
    logger.warn('Falling back to alternative data...');
    return [];
}

function updateTodoFile(item = []) {
    return new Promise((resolve, reject) => {
        fs.writeFile(dbFileName, JSON.stringify(item), function (err, data) {
            if (err) {
                reject({
                    code: 'FILE_WRITE_ERROR',
                    message: `Error writing to file: ${dbFileName}`,
                    stack: err.stack, // Include stack trace
                    error: err
                });
            } else {
                if (item.length === 0) {
                    logger.info("No existing records, Created an empty list.");
                }
                resolve(item);
            }
        });
    })
}

function getDataFromFile() {
    return new Promise((resolve, reject) => {
        if (fs.existsSync(dbFileName)) {
            const shouldFail = Math.random() < 0.5; //Simulating transient error by randomly failing.
            if (false) {
                reject({
                    code: 'TRANSIENT_ERROR',
                    message: `Simulated transient error while reading file: ${dbFileName}`,
                    error: `shouldFail is ${shouldFail}`
                });
            } else {
                fs.readFile(dbFileName, (err, data) => {
                    if (err) {
                        reject({
                            code: 'FILE_READ_ERROR',
                            message: `Error reading file: ${dbFileName}`,
                            stack: err.stack, // Include stack trace
                            error: err
                        });
                    } else {
                        try {
                            logger.info("This is the OG Data: " + data);
                            logger.info("This is from getData: " + JSON.parse(data));
                            resolve(JSON.parse(data));
                        } catch (anyErrorWhileParsing) {
                            reject({
                                code: 'JSON_PARSE_ERROR',
                                message: `Error parsing JSON data from file: ${dbFileName}`,
                                stack: anyErrorWhileParsing.stack, // Include stack trace
                                error: anyErrorWhileParsing
                            });
                        }
                    }
                });
            }
        } else {
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

module.exports = { getDataFromFile, updateTodoFile, getDataFromFileWithRetry };
