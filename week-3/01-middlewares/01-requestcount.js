const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let requestCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

<<<<<<< HEAD


=======
>>>>>>> origin/master
app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

<<<<<<< HEAD
const globalRequestCount =(req,res,next)=>{
  if(req.method==='POST'||req.method==='GET'){
    requestCount++;
  }
  next();
}

app.use(globalRequestCount);
=======
>>>>>>> origin/master
app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', function(req, res) {
  res.status(200).json({ requestCount });
});

module.exports = app;