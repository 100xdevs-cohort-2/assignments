const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let requestCount = 0;

function requestCountMiddleware(req, res, next){
  requestCount++;
  next();
}

// app.use(requestCountMiddleware);

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

app.get('/user',requestCountMiddleware,function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user',requestCountMiddleware, function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount',requestCountMiddleware, function(req, res) {
  res.status(200).json({ requestCount });
});

module.exports = app;