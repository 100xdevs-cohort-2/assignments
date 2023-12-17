const fs = require("fs");

//Reading from a file
fs.readFile("a.txt", "utf-8", (err, data) => {
  console.log(data);
});

//expensive operation s
let sum = 0;
for (let i = 0; i < 100000000; ++i) {
  sum += i;
}
console.log(sum);
