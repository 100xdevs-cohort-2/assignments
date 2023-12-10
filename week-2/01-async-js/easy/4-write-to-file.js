const fs = require("fs");

const content = "Welcome to my first Pull Request";

fs.writeFile("./fileWrite.txt", content, "utf8", (err) => {
  if (err) {
    console.error("There was an unexpected error while writing to this file.");
    return;
  }
});

fs.readFile("./fileWrite.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading contents of the File");
  }
  console.log("'The contents of the file are printed below'\n" + data);
});
