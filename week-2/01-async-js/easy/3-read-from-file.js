const fs = require("fs");

fs.readFile("a.txt", "utf8", function (err, data) {
  console.log(data);
});

for (let i = 0; i < 10000000000; i++) {}
