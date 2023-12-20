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

const fs = require('fs');

const content = fs.readFile('../easy/test.txt','utf8',(err,data)=>{
    if(err) console.log("Cannot read data. An error occured !");
    let new_data = data.trim();
})