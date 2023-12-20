let fs = require("fs");

fs.readFile("sample.txt", "utf8", function (err, data) {
  console.log(data);
});

console.log("readFile called");

for (let i = 0; i <= 1000000000000; i++) {}
