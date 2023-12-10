const fs = require("fs");

fs.readFile("./Assignments.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file!", err);
    return;
  }
  eval(data);
  console.log("Below are the contents of the File\n");
  console.log(data);
});
