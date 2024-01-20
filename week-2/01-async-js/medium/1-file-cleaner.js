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

fs.readFile("week-2/02-nodejs/files/a.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    let cleanedData = data.replace(/\s+/g, " ").trim();
    fs.writeFile("week-2/02-nodejs/files/a.txt", cleanedData, (err) => {
      if (err) console.log(err);
      else {
        fs.readFile("week-2/02-nodejs/files/a.txt", "utf-8", (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
          }
        });
      }
    });
  }
});
