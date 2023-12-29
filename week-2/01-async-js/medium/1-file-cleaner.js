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

fs.readFile("Example.txt", "utf-8", (err, data) => {
    // we need to have regex to remove extra spaces
  let result = data.replace(/\s+/g, " ");

  fs.writeFile("Example.txt", result, (err) => {
    if (err) {
      console.log(err);
    }
    fs.readFile("Example.txt", "utf-8", (err, data) => {
      console.log(data);
    });
  });
});
