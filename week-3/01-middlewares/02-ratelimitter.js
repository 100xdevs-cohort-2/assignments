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

function requestLimiter(req, res, next){
  // let userActivity = `${req.headers.user-id}:${count}`;
  let user = req.headers['user-id'];
  if(!(user in numberOfRequestsForUser)){
    numberOfRequestsForUser[user] = 0;
    console.log(`Logging user ${user} for the first time.`);
    next();
  }
  else{
    let count = numberOfRequestsForUser[user];
    count = count + 1;
    numberOfRequestsForUser[user] = count;
    console.log(`Logging user ${user} for the ${count} time.`);
    if(count >= 5){
      console.log(`Max attempts reached for user: ${user}.`);
      res.status(404).json({msg: "Maximum limit reached, try after some time."});
    }else{
      next();
    }
  }

}

app.use(requestLimiter);

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;