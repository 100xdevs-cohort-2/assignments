const fs = require("fs");
function myReadFile() {
  return new Promise(function (resolve) {
    fs.readFile("test.txt", "utf-8", function (err, data) {
      if (!err) {
        resolve(data);
      }
    });
  });
}
function myWriteFile(data) {
  fs.writeFile("test.txt", data.replace(/\s+/g, " ").trim(), function (err) {
    if (!err) {
      console.log("written!");
    }
  });
}
let mrf = myReadFile();
console.log(mrf);
mrf.then(function (data) {
  console.log("read");
  myWriteFile(data);
});
