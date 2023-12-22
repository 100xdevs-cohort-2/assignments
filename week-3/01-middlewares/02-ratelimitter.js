
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
function middleWare(req, res, next) {
  const userId = req.headers['user-id'];
  const userRequest = numberOfRequestsForUser[userId] ?? 0;
  if(userRequest >= 5) {
      const error = new Error("Too many request form this userId");
      return next(error);
    }
  else {
    numberOfRequestsForUser[userId] = userRequest + 1;
    next();
  }
}
app.use(middleWare);
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000)

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});
app.use((err, req, res, next) => {
  res.status(404).send();
}); 
module.exports = app;