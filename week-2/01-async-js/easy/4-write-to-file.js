const fs = require("fs");

function writeToFile(filePath, content) {
  fs.writeFile(filePath, content, "utf8", function (err) {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File has been written successfully!");
  });
}

const filePath = "C:/Users/amnvr/Cohort/sample.txt";
const contentToWrite = "Hello, this is the content to write to the file.";

writeToFile(filePath, contentToWrite);
