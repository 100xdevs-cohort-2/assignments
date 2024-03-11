//********** 1-counter.md ***********
// let count = 0;
// function counter() {
//   count++;
//   console.log(count);
// }
// setInterval(counter, 1000);

//********** 2-counter.md ***********
// let count = 0;
// function counter() {
//   count++;
//   console.log(count);
//   setTimeout(counter, 1000);
// }
// counter();

//********** 3-read-from-file.md ***********
// const fs = require("fs");
// fs.readFile("a.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err);
//     return;
//   }
//   let sum = 0;
//   for (let i = 0; i < 1000000000; i++) {
//     sum += i;
//   }
//   console.log(sum);
//   console.log("File Content:", data);
// });

//********** 4-write-to-file.md ***********
// const fs = require("fs");
// fs.writeFile("b.txt", "Hello World", (err) => {
//   if (err) {
//     console.error("Error writing file:", err);
//     return;
//   }
//   console.log("File written successfully");
// });

// fs.readFile("b.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err);
//     return;
//   }
//   console.log("File Content:", data);
// });
