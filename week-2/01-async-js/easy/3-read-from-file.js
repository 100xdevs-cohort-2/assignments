const fs = require("fs");

function readFile() {
  fs.readFile("a.txt", "utf-8", function (err, data) {
    console.log(data);
  });
}

function sum() {
  let ans = 0;
  for (let i = 0; i < 10000000000; i++) {
    ans += i;
  }

  console.log(ans);
}

readFile();
sum();
