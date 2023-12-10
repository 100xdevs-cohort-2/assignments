// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// hello     world    my    name   is       raman

// After the program runs, the output should be
// hello world my name is raman

const fs = require("fs");

function cleanFile(file) {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) throw err;
    const cleanedData = data.replace(/\s+/g, " ");
    fs.writeFile(file, cleanedData, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  });
}

cleanFile("./file.txt");
