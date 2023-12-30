// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

const data = "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.";

fs.writeFile('4-write-to-file.txt', data, function (err) {
  if (err) throw Error;
  console.log("Finished Writing");
});

for (let index = 0; index < 10000000000; index++) {
}
console.log("Completed Task");

// Same as previous question we can see that the Writing will be processed after the expensive tasks
