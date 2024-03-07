const express = require("express");
const app = express();
const assert = require("assert");

let errorCount = 0;

app.use((err, req, res, next) => {
  errorCount++;

  res.status(404).json({ error: "Not Found" });
});

app.get("/user", function (req, res, next) {
  next(new Error("User not found"));
});

app.post("/user", function (req, res) {
  res.status(200).json({ msg: "created dummy user" });
});

app.get("/errorCount", function (req, res) {
  res.status(200).json({ errorCount });
});

module.exports = app;
