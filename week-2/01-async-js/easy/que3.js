const fs = require("fs");

console.log("Start");
fs.readFile("a.txt", "utf-8", (err, data) => {
  if (err) throw new Error();
  console.log(data);
});
console.log("End 1");
let sum = 0;
for (let i = 0; i < 1000000000; i++) {
  sum += i;
}

console.log("End 2");
