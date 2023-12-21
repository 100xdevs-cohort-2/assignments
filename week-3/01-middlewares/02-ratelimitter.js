const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = {};
const requestLimit = 5;

// clears the request of each user per second
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000)

app.use((req, res, next) => {

  // retrive the user id from the request headers
  const userId = req.headers["user-id"];

  if(!userId)
  {
    res.status(400).json({msg: "user Id is required"})
  }

  // set the requests per userId
  numberOfRequestsForUser[userId] = (numberOfRequestsForUser[userId]) || 0;

  // if an user sends more than 5 requests per second 
  // then throw a 404 to block him/her
  if(numberOfRequestsForUser[userId] >= requestLimit)
  {
    return res.status(404).json({msg: "Requests per second exceeded!"})
  }

  // increase the number of request per user
  numberOfRequestsForUser[userId]++;

  next()

})

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;