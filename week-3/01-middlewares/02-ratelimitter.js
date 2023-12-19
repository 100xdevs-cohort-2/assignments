const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();

const requestLimit = 5;
let numberOfRequestsForUser = {};

setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000);

app.use((req, res, next) => {
    const userId = req.headers['user-id'];

    if (!userId) {
        next();
        return;
    }

    numberOfRequestsForUser[userId] = (numberOfRequestsForUser[userId] || 0) + 1;

    if (numberOfRequestsForUser[userId] >= requestLimit) {
        res.status(404).json({ msg: 'Request limit is exceeded' });
    } else {
        next();
    }
});

app.get('/user', function (req, res) {
    res.status(200).json({ name: 'john' });
});

app.post('/user', function (req, res) {
    res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;
