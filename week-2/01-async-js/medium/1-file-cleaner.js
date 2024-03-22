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
const data = fs
  .readFileSync("a.txt", "utf-8")
  .replace(/\s+/g, " ")
  .replace(/[^a-zA-Z0-9 ]/g, "");
fs.writeFileSync("output.txt", data, "utf-8");
