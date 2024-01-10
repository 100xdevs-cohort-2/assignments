const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
  console.log(data);
});

let x = 0;
for (let i = 0; i < 1000000; i++) {
  x++;
}

console.log(x);
