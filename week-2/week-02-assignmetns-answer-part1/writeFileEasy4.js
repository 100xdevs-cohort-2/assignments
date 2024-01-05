const fs = require("fs");

// Specify the file path and the content to be written
const filePath = "a.txt";
const contentToWrite = "This is the content to be written to the file.";

// Use fs.writeFile for asynchronous file writing
fs.writeFile(filePath, contentToWrite, (err) => {
  if (err) {
    console.error("Error writing to the file:", err);
  } else {
    console.log("File has been written successfully.");
  }
});
