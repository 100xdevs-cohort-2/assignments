// logger.js
const winston = require('winston');
const fs = require('fs');

// Create logs directory if it doesn't exist
const logsDir = './logs';
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

// Configure Winston logger
const logger = winston.createLogger({
    level: 'info', // Set the minimum log level
    format: winston.format.json(), // Choose the log format
    transports: [
        new winston.transports.File({ filename: './logs/error.log', level: 'error' }), // Log errors to error.log
        new winston.transports.File({ filename: './logs/combined.log' }) // Log all messages to combined.log
    ]
});

// Add console transport for logging to console during development
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }));
}

// Log the environment
logger.info('Running in', process.env.NODE_ENV, 'environment');

module.exports = logger;
