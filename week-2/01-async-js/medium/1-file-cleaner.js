// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

//read from file
fs.readFile("test_read.txt", "utf-8", (err, data) => {
  if (err) throw err;
  else {
    const str = data.replace(/\s/g, "");
    console.log(str);
  }
});
