const fs = require("fs");

function readFile() {
  fs.readFile("3-read-from-file.md", "utf-8", function (err, data) {
    if (err) throw err;
    console.log(data);
  });
}

readFile();
