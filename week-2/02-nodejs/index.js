const express = require("express");
const app = express();
app.listen(3000);
app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/delete", (req, res) => {
  res.send("delete your todo");
});
app.get("/sum/:sum", (req, res) => {
  let sum = Number(req.params.sum);
  res.send("sum=" + (sum + sum));
});
