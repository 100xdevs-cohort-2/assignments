const fs = require("fs");

let data = "Hi there from a.txt";

fs.writeFile("a.txt", data, (err) => {
  console.log(err);
});

let sum = 0;
for (let i = 0; i < 1000000000; i++) {
  sum += i;
}

console.log(sum);
