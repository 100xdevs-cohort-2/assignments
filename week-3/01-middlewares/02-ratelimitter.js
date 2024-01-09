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
// You have been given a numReqUser object to start off with which
// clears every one second

let numReqUser = {};
setInterval(() => {
    numReqUser = {};
}, 1000)

const rateLimitChecker = (req, res, next) => {
	let uid = req.headers['user-id'];

	if (!numReqUser[uid]) {
		numReqUser[uid] = 1;
	} else {
		numReqUser[uid]++;
	}

	if (numReqUser[uid] > 5) {
		res.status(404).send('Max limit exceeded');
		return;
	}
	next();
}

app.use(rateLimitChecker);

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;
