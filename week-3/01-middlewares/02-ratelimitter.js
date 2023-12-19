const express = require('express');
const app = express();

// Rate limit configuration
const requestsLimitPerSecond = 5;
let numberOfRequestsForUser = {};

// Global middleware to rate limit requests per user
app.use((req, res, next) => {
    const userId = req.headers['user-id'];

    // Check if userId is provided in headers
    if (!userId) {
        return res.status(400).json({ error: 'User ID not provided in headers' });
    }

    // Initialize or increment the request count for the user
    numberOfRequestsForUser[userId] = (numberOfRequestsForUser[userId] || 0) + 1;

    // Check if the user has exceeded the limit
    if (numberOfRequestsForUser[userId] > requestsLimitPerSecond) {
        return res.status(404).json({ error: 'Request limit exceeded for this user' });
    }

    // Continue to the next middleware or route handler
    next();
});

// Example routes
app.get('/user', (req, res) => {
    res.status(200).json({ name: 'john' });
});

app.post('/user', (req, res) => {
    res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;
