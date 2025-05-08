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
setInterval(() => {
  numberOfRequestsForUser = {};
}, 1000)

app.use(express.json());

function rateLimiter(req, res, next){
  const userID = req.headers['user-id'];
  // if(!userID){
  //   return res.status(400).json({err: 'Missing user-id header'}); 
  // }
  if(!numberOfRequestsForUser[userID]){
    numberOfRequestsForUser[userID] = 1;
  }
  else{
    numberOfRequestsForUser[userID]++;
  }
  if(numberOfRequestsForUser[userID] > 5){
    return res.status(404)
    .set('Retry-After', '1')
    .json({err: 'Too Many Requests'});
  }
  next();
}

app.use(rateLimiter);

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.listen(3002, () =>{
  console.log('server is running on port 3000');
})

module.exports = app;