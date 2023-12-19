const fs = require("fs");
const path = require("path");

const fileNamePath = path.join(__dirname, "file.txt");

fs.readFile(fileNamePathRead, (err, data) => {
  if (err) console.log("ERROR READING...");
  else {
    data = data.replace(/\s/g, " ");
    fs.writeFile(fileNamePathWrite, data, (err) => {
      if (err) console.log("ERROR WRITING...");
      else console.log("Written successfully...");
    });
  }
});
