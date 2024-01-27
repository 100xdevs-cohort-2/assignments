
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

app.use(function(req,res,next){
  const userId=req.headers["user-id"]//consider only that req which send with user-id; 
  
  if(numberOfRequestsForUser[userId]){//if it is aleady define i.e numberOfRequestsForUser[userId])>1 then
    numberOfRequestsForUser[userId]++;//increment the number of request
   
    if(numberOfRequestsForUser[userId]>5){//if numberOfRequestsForUser[userId])>5 block
      res.status(404).send("max limit Reached");
    }else{
      next();//else i.e numberOfRequestsForUser[userId])<5 move to nexr
    }

  }else{
    numberOfRequestsForUser[userId]=1;//if it  is the 1sttime define numberOfRequestsForUser[userId] with 1 
    next();
  }
  
})

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;