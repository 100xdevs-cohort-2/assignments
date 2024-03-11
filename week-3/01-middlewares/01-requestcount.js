const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let requestCount = 0;

// Global middleware to count requests
app.use((req, res, next) => {
    requestCount++;
    next(); // Continue to the next middleware or route handler
});

// Your existing routes
app.get('/user', function (req, res) {
    res.status(200).json({ name: 'john' });
});

app.post('/user', function (req, res) {
    res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', function (req, res) {
    res.status(200).json({ requestCount });
});

module.exports = app;
