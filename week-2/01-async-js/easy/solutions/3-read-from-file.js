const express = require("express");
const fs = require("fs");

const port = 4000;

const app = express();

fs.readFile("3-a.txt", "utf-8", (err, data) => {
  console.log(data);
});

app.listen(port, () => console.log(`Running on ${port}`));
