const fs = require("fs");
function readFile() {
  fs.readFile("about.txt", "utf-8", function (err, data) {
    console.log(data);
  });
}

readFile();
