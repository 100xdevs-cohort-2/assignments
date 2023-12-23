const fs = require("fs");

let data = "Javascript is a single threaded langauage";

fs.writeFile("b.txt", data, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("File written successfully");
  }
});

// async function writeFileAsync() {
//   try {
//     let data = "Javascript is a single-threaded language";
//     await fs.writeFile("b.txt", data);
//     console.log("File written successfully");
//   } catch (error) {
//     console.error("Error writing file:", error);
//   }
// }

// writeFileAsync();

for (let i = 0; i < 10000000000; i++) {}
