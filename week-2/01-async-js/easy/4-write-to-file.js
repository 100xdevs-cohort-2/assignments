const fs = require("fs");

fs.writeFile("b.txt", "Hey baby how are you doing", null, (err) => {
  console.log("Writing file done");
});

let sum = 0;

for (let i = 0; i < 100000; i++) {
  sum += i;
}

console.log(sum);
