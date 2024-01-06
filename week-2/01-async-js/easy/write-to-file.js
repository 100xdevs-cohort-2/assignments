let fs = require("fs");

fs.writeFile(
  "testfile.txt",
  "This is ashif overriding the existing content in the testfile.txt",
  (err) => {
    console.log("Content Changed!");
  }
);
