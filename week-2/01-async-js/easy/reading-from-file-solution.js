const fs = require("fs");

let filePath = "3-read-from-file.md";

fs.readFile(filePath, { encoding: "utf-8" }, function (err, data) {
  if (data) {
    console.log("File Date: \n", data);
  }
});
