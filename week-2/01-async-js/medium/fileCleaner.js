const fs = require("fs");
function fileRead() {
  return new Promise(function (resolve) {
    fs.readFile("file.txt", "utf-8", (err, data) => {
      if (!err) {
        resolve(data);
      }
    });
  });
}

function fileWrite(data) {
  data = data.replace(/\s+/g, " ");
  fs.writeFile("file.txt", data, "utf-8", (err) => {
    if (!err) console.log("file has been updated!!");
  });
}

fileRead().then(fileWrite);
