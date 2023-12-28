// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

fs.writeFile(
  "temp.txt",
  "When our mama sang us to sleep, But now we're stressed out",
  "utf-8",
  (err) => {
    console.log("Content has been written to the file");
  }
);

// Print the output of the file
const p = new Promise((resolve, reject) => {
  fs.writeFile(
    "temp.txt",
    "When our mama sang us to sleep, But now we're stressed out",
    "utf-8",
    (err) => {
      if (err) {
        reject("Error writing to the file", err);
      }
      resolve("Content has been written to the file");
    }
  );
});

p.then(() => {
    fs.readFile("temp.txt", "utf-8", (err, data) => {
        console.log(data);
    })
}); 

let sum_1000000 = 0;
for (let index = 1; index <= 1000000; index++) {
  sum_1000000 += index;
}
console.log(sum_1000000);
console.log("Expensive_Operation-1 done");

let sum_100000000 = 0;
for (let index = 1; index <= 100000000; index++) {
  sum_100000000 += 5;
}
console.log(sum_100000000);
console.log("Expensive_Operation-2 done");

console.log(
  "File content will be written after all the synchronous tasks are completed."
);
