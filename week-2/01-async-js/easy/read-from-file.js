const fs = require("fs");
setTimeout(function () {
  console.log("hi there");
}, 20);

console.log("Before reading");

function reading() {
  fs.readFile("testfile.txt", "utf-8", function (error, data) {
    console.log(data);
  });
}
reading();

let a = 0;
for (let i = 0; i < 100000; i++) {
  a++;
}
console.log(a);
