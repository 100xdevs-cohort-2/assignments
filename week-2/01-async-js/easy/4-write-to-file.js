const fs = require("fs");

function writeToFile() {
  fs.writeFile("writeToFile.txt", "Added Extra Content", function (err) {
    if (err) throw err;
  });
  fs.readFile("writeToFile.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}

writeToFile();
