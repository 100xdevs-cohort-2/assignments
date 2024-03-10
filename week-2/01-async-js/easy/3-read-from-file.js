const fs = require("fs");
function myReadFile() {
  return new Promise(function (resolve) {
    fs.readFile("test.txt", "utf-8", (err, data) => {
      resolve(data);
      // resolve
    });
  });
}
myReadFile().then(function (data) {
  console.log(data);
});
let sum = 0;
for (let i = 0; i < 9999; i++) {
  sum++;
}
