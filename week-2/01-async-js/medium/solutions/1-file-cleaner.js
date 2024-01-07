const express = require("express");
const fs = require("fs");

const app = express();

fs.readFile("readFile.txt", "utf-8", (err, data) => {
  if (err) throw Error(err);
  console.log(data);

  let cleanedFile = data.replace(/[ ]+/g, " ");

  console.log(cleanedFile);

  fs.writeFile("readFile.txt", cleanedFile, (err) => {
    if (err) throw Error(err);

    console.log("File is cleaned Successfully!!!");
  });
});

app.listen(4000);
