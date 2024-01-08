const fs = require("fs");

function readWrite() {
  let value = fs.readFileSync("a.txt", "utf8");
  let arr = value.split(" ");
  arr = arr.filter((ele, index, arr) => {
    return ele !== "";
  });

  fs.writeFileSync("a.txt", arr.join(" "));
}

let sum = 0;
for (let i = 0; i < 1000000000; i++) {
  sum += i;
}

readWrite();
console.log(sum);
