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
fs.readFile('a.txt','utf-8',function(err,data){
   const cleandata = data.replace(/\s+/g," ");
   fs.writeFile('a.txt',cleandata,function(err){
    console.log(err);
    fs.readFile('a.txt','utf-8',function(err,ndata){
        console.log(ndata);
    })
   })
})

