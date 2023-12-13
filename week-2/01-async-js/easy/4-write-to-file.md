## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");
let a = 0;
const text = ' JK Rowling 3'

fs.appendFile("a.txt", text, function (err,) {
  if (err) {
    console.log(err);
  }
});

for (let i = 0; i < 1000000000; i++) {
  a = a + 1;
}
