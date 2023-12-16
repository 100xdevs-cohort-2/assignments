// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

fs.writeFile("write.txt", "Hello from FS Write mode!", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Written to file successfully!");
  }
});

let count = 0;
console.log("Before the expensive operation");
for (let x = 0; x < 100000000; x++) {
  count++;
}
console.log("After the expensive operation", count);
