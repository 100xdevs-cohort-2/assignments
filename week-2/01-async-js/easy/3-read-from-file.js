const fs = require("fs");

function readToFile() {
  const p = new Promise(function (resolve) {
    fs.readFile("test.txt", "utf-8", (err, data) => {
      resolve(data);
    });
  });
  return p;
}

async function main() {
  const text = await readToFile();
  console.log(text);
}

let a = 0;
main();
for (let i = 0; i < 1000000; i++) {
  a = a + i;
}
console.log(a);
