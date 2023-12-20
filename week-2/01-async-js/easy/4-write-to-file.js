const fs = require("fs");
let data = "hello there beatifyl";
function writeToFile(data) {
  return new Promise(function (resolve) {
    fs.writeFile("a.txt", data, function (err) {
      if (err) {
        throw err;
      }
    });
    resolve();
  });
}

writeToFile(data).then(function () {
  fs.readFile("a.txt", "utf-8", function (err, data) {
    console.log("after read: ", data);
  });
});
