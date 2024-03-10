const request = require("supertest");
const assert = require("assert");
const express = require("express");

const app = express();
let requestCount = 0;

app.use(express.json());

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

function globalMiddleWare(req, res, next) {
	requestCount++;
	console.log(`the request count now is ${requestCount}`);
	next();
}
app.use(globalMiddleWare);

app.get("/user", function (req, res) {
	res.status(200).json({ name: "john" });
});

app.post("/kio", function (req, res) {
	res.status(200).json({ msg: "created dummy user" });
});

app.get("/requestCount", function (req, res) {
	res.status(200).json({ requestCount });
});

app.listen(3000, () => console.log(`server is up and running`));

module.exports = app;
