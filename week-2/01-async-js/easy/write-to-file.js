const fs = require("fs");
const path = require("path");

const fileNamePathWrite = path.join(__dirname, "new-file-for-write.txt");
const fileNamePathRead = path.join(__dirname, "3-read-from-file.md");

fs.readFile(fileNamePathRead, (err, data) => {
  if (err) console.log("ERROR READING...");
  else {
    fs.writeFile(fileNamePathWrite, data, (err) => {
      if (err) console.log("ERROR WRITING...");
      else console.log("Written successfully...");
    });
  }
});
