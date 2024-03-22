// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
const fs = require("fs");
let data = "asdfdsfdsfds";
fs.writeFile("a.txt", JSON.stringify(data), (err) => {
  if (err) {
    console.log("sdfasdsaf");
  } else {
    console.log("File written successfully\n");
    console.log("The written has the following contents:");
    console.log(fs.readFileSync("a.txt", "utf8"));
  }
  for (let i = 0; i < 1000000000; i++) {}
  console.log(data);
});
