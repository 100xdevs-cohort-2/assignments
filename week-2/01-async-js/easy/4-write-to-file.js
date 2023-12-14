/*
Writing to the contents of a file. 
*/

const fs = require("fs");

const content = "Hello Javascript!\n";

fs.appendFile("week-2/01-async-js/easy/4-a.txt", content, "utf-8", (error) => {
  if (error) {
    console.error("Error writing to file:", error);
    return;
  }
  console.log("File has been written successfully.");
});
