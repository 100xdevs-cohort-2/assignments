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
function cleanFile() {
  fs.readFile("a.txt", (err, data) => {
    if (err) throw err;
    let updatedData = data.toString().replace(/\s+/g, ' ');
     
     

    fs.writeFile("a.txt",updatedData,(err)=>{
        console.log(" File cleaned and rewrited  to file done")
    })
  });
}
cleanFile();

 
