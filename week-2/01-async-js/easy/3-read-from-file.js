const fs = require("fs");
const path = require("path");

fs.readFile(
  path.join(__dirname, "3-read-from-file.txt"),
  "utf-8",
  (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  }
);

// -- expensive operation --
let count = 0;
for (let i = 0; i < 1000000000; i++) {
    count += i;
}
console.log(count);

count = 0;
for (let i = 0; i < 1000000000; i++) {
    count += i;
}
console.log(count);

count = 0;
for (let i = 0; i < 1000000000; i++) {
    count += i;
}
console.log(count);