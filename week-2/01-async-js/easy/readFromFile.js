const fs = require("fs");

function countWords(string) {
  let words = string.split(" ");
  return words.length;
}

function readFromFile(file) {
  fs.readFile(`${__dirname}/${file}`, "utf-8", function (err, data) {
    console.log(data);
    console.log("Number of words: ", countWords(data));
  });
}

console.time("time");
readFromFile("3-read-from-file.md");

// Expensive operation ->

let a = 0;
for (let i = 0; i < 10000000000; i++) {
  a++;
}
console.timeEnd("time");
