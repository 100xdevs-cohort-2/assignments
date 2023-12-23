const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
  if (data) console.log(data);
});

let sum = 0;
for (let i = 0; i < 10000000000; i++) {
  sum += i;
}

console.log(sum);
