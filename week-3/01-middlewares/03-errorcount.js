const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let errorCount = 0;

// Global middleware to handle exceptions and increment errorCount
app.use((err, req, res, next) => {
    console.error(err.stack);

    // Check if it's a genuine 404 error
    if (err.status === 404) {
        return res.status(404).json({ error: 'Not Found' });
    }

    // For other errors, increment errorCount and respond with a 500 status
    errorCount++;
    res.status(500).json({ error: 'Internal Server Error' });
});

app.get('/user', function (req, res, next) {
    // Throwing an error to simulate user not found
    throw createNotFoundError('User not found');
});

app.post('/user', function (req, res) {
    res.status(200).json({ msg: 'created dummy user' });
});

app.get('/errorCount', function (req, res) {
    res.status(200).json({ errorCount });
});

// Helper function to create a 404 error
function createNotFoundError(message) {
    const err = new Error(message);
    err.status = 404;
    return err;
}

module.exports = app;
