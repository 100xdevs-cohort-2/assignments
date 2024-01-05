const fs = require("fs");
const path = require("path");

const data = "This is a new paragraph.";

fs.writeFile(
  path.join(__dirname, "3-read-from-file.txt"),
  data,
  "utf-8",
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File written successfully");
    }
  }
);
