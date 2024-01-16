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
fs.readFile('b.txt', 'utf-8', (err, data)=>{
    let datafile = data.trim();
    fs.writeFile('b.txt', datafile, (err)=>{
        if(err)console.log(err);
    })
})





