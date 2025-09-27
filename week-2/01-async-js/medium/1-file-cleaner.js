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


const fs = require('fs/promises');
const path = require('path')
const fileName = "cleaner.txt"
const filePath = path.join(__dirname, fileName)

fs.readFile(filePath,"utf-8")
.then((data)=> { 
let oldData= data
const cleaned = oldData.replace(/\s+/g, " ").trim();

  fs.appendFile(filePath,"\n"+cleaned, "utf-8")
  .then(()=> console.log(`Cleaned Version of the data has been added.`))
  .catch((err)=> console.error(err))

})
.catch((err)=> console.error(err))

