const fs = require("fs");
function readFromFile() {
  return new Promise(function (resolve) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
      if (!err) resolve(data);
    });
  });
}
function display(data) {
  console.log(data);
}
readFromFile().then(display);

let a = 0;
for (let i = 0; i < 1000000000; i++) {
  a++;
}
console.log(a);
