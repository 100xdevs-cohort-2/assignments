const fs = require("fs");
const path = require("path");
function readContentOfFile() {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, "sample.txt"), "utf-8", (err, data) => {
      if (err) {
        reject("error occured");
        console.log(err);
      } else {
        resolve(data);
      }
    });
  });
}
readContentOfFile()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
