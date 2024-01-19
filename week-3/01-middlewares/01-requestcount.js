const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let requestCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

function countmiddleware(req,res,next) {
  requestCount++;
  next();
}
//app.use(countmiddleware); Can also use this one


app.get('/user',countmiddleware, function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user',countmiddleware, function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount',countmiddleware, function(req, res) {
  res.status(200).json({ requestCount });
});

module.exports = app;