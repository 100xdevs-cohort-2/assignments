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

try {
  const data = fs.readFileSync("/Users/venkateshk/Desktop/sim.txt", "utf-8");
  console.log(data);

  const cleanedData = data.replace(/\s+/g, " ").trim();
  console.log(cleanedData);
} catch (error) {
  console.log(error);
}
