// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("node:fs");
const content = "Some content!";
try {
  fs.writeFileSync("file.txt", content, { flag: "a+" });
} catch (err) {
  console.error(err);
}
