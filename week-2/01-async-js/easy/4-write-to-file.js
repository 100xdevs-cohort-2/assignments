// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

let newData = "  software engineer at NTT from 1 year";


// when only want to add new things without removing existing things
// fs.appendFile("Notes.txt", newData, (err) => {

// when want to add new things without having the existing things

fs.writeFile("Notes.txt", newData, (err) => {
  if (err) {
    console.log(err);
  }
  fs.readFile("Notes.txt", "utf-8", (err, data) => {
    console.log(" new data from same file", data.toLocaleUpperCase());
  });
});
