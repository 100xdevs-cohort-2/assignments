const fs = require("fs");
let cnt = 0;
for (let i = 0; i < 10000000000; i++) {
  cnt++;
}
console.log(cnt);
fs.readFile("a.txt", "utf-8", (err, data) => {
  console.log(data);
});
