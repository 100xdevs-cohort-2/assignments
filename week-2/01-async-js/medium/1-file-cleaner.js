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

const fs = require("fs")
const filePath = "fule.txt"
const data = fs.readFileSync(filePath,"utf-8")
let cleanedContent = data.replace(/\s+/g, ' ');

fs.writeFileSync(filePath, cleanedContent);
console.log(cleanedContent)