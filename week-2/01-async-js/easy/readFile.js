let fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
  console.log(data);
});

console.log("after readFile");

for (let i = 0; i < 1000000; i++) {
  console.log(i);
}
