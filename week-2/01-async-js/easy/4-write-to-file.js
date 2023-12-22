const fs = require("fs");

function solve() {
  return new Promise(function (resolve) {
    const writetofile = "I dont know about that";
    fs.writeFile("test.txt", writetofile, "utf-8", function (err) {
      resolve("data has been written");
    });
  });
}

async function main() {
  const final = await solve();
  console.log(final);
}

main();
