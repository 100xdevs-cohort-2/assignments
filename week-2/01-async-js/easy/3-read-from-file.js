const { readFile, writeFile, read } = require("fs");

readFile("./3-read-from-file.md", "utf-8", (err, result) => {
  console.log(result);
});

let a = 0;
for (let i = 0; i < 1000000000; i++) {
  a++;
}
