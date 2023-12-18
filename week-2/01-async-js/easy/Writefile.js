const fs = require("fs");

const writeFile = (fileName, contentToWrite) => {
  fs.writeFile(fileName, contentToWrite, (err) => {
    if (err) throw new Error("Error writing to the file");
    console.log("saved");
  });
};

const appendFile = (fileName, contentToAdd) => {
  fs.appendFile(fileName, contentToAdd, (err) => {
    if (err) throw new Error("Error writing to the file");
    console.log("write to file successfully");
  });
};

writeFile("log.txt", "Hello I am first line. \n");
appendFile("log.txt", "Hello I am added below the first line.");
