const request = require('supertest');
const assert = require('assert');
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
let requestCount = 0;

app.use(bodyParser.json());

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

function requestCounter(req, res, next){
    requestCount++;
    next();
}


app.get('/user', requestCounter, function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', requestCounter, function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', requestCounter, function(req, res) {
  res.status(200).json({ requestCount });
});

//app.listen(3000);

module.exports = app;