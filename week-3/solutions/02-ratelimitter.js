const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();
app.use(express.json())
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = {
};

setInterval(() => {
    numberOfRequestsForUser = {};
    // console.log("Insideeee")
}, 10000)

app.use(function(req, res, next){
    const userid = req.headers.id
    if(numberOfRequestsForUser[userid]){
        if(numberOfRequestsForUser[userid]<5){
            numberOfRequestsForUser[userid]++;
        } else{
            res.statusCode(404).json({
                msg: "Cant sent more than 5 req per second."
            })
        }
    } else{
        numberOfRequestsForUser[userid] = 1;
    }
    console.log(numberOfRequestsForUser)
    next()
})

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.use(function(err, req, res, next){
    if(err){
        console.log("Error occured")
        res.json({
            msg: "Error occureddddd"
        })
    }
})

app.listen(4000, ()=> console.log("Listening on Port 30000"))
