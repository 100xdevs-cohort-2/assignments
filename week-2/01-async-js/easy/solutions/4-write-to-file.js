const express = require("express");
const fs = require("fs");

const port = 3000;

const app = express();

fs.writeFile("3-a.txt", "fileData", (err) => {
  if (err) throw Error("hehe");
  console.log("File Saved");
});

app.listen(port);
