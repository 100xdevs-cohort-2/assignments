const fs = require("fs");

const finalSum = (n) => {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

fs.readFile("a.txt", "utf-8", (err, data) => {
  console.log(data);
});


console.log(finalSum(1000000000));
