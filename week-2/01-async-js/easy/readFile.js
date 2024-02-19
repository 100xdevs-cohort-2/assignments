const fs = require("fs");

fs.readFile("3-read-from-file.md", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

let sum = 0;
for (let index = 0; index < 10000; index++) {
  console.log(index);
}
console.log(sum);
