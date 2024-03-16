/*
## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.
*/

const fs = require("fs");

const contentToWrite = "Hello, write to a file.";

fs.writeFile("a.txt", contentToWrite, "utf8", (err) => {
  if (err) {
    console.error("Error writing to the file:", err);
    return;
  }

  console.log("Content has been written to a.txt");
});
