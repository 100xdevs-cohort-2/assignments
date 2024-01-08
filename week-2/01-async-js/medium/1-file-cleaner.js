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

const fs = require("node:fs");

fs.readFile("../easy/file handling/file.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  //   console.log(data.trim());
  let content = data.replace(/\s+/g, " ");
  //   console.log(content);
  fs.writeFileSync("../easy/file handling/file.txt", content);
  //   fs.readFile("../easy/file handling/file.txt", (err, data) => {
  //     console.log(data);
  //   });
});
//how to read again,
