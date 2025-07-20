const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let requestCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

// if we want to call a function for every route-handler (we call that function as middleware) and will be called using app.use() syntax. if we does not provide any route to it, then the function will be called for every request coming to the server. We can mention also the specific routes for which we want to call [all-route-names] but for this the better approach is to use the function (middleware) inside the route-handler

function countRequest(req, res, next) {
  requestCount++;
  next();
}

app.use(countRequest);

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', function(req, res) {
  res.status(200).json({ requestCount });
});

module.exports = app;