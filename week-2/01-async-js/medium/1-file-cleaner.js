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

fs.readFile("./week-2/01-async-js/medium/b.txt", (err,data)=>{
    let r= data.toString();
    r= r.replace(/\s+/g, ' ').trim()
    console.log(r)
    fs.writeFile("./week-2/01-async-js/medium/b.txt",r,(err)=>{
        if(err) throw err;
    })
})