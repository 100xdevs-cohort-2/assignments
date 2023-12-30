// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.
//
// For example, if the file input was
// 
// hello     world    my    name   is       raman
//
// After the program runs, the output should be
//
// hello world my name is raman
//

const fs = require("fs");
fs.readFile("1-file-cleaner.txt", "utf8", function (err, data) {
  if (err) throw Error;
  data = data.replace(/\s+/g, " ");
  fs.writeFile("1-file-cleaner.txt", data, function (err) {
    if (err) throw Error;
    console.log("Finished Writing the Corrected Data");
  });
});

