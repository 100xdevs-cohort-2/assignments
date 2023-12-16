/*
Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.8
*/
const fs = require("fs");
fs.appendFile("./t.txt", " This is Ash", function (err) {
  if (err) console.log("Failed to append");
});
for (let i = 0; i < 10000000; i++) {
  let count = 0;
  count += i;
}
