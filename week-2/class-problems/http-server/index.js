const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();

app.use(bodyParser.json());

app.post("/post", function (req, res) {
  console.log(req.body);
  res.json({ message: "Hello World!" });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});
