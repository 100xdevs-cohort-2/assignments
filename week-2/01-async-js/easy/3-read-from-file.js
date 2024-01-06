const fs = require("fs");

fs.readFile("a.txt", "utf8", function (err, data) {
  console.log(data);
});

// async function readFileAsync() {
//   try {
//     const data = await fs.readFile("a.txt", "utf8");
//     console.log(data);
//   } catch (error) {
//     console.error("Error reading file:", error);
//   }
// }

// readFileAsync();

for (let i = 0; i < 10000000000; i++) {} //Expensive operation
