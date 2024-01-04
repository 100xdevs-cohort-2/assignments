const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let requestCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable


// app.use((req,res,next)=> {
//   requestCount ++;
//   next();
// })

function countRequest(req,res,next){
  requestCount++;
  next();
}



app.get('/user',countRequest, function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user',countRequest, function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount',countRequest, function(req, res) {
  res.status(200).json({ requestCount });
});

module.exports = app;