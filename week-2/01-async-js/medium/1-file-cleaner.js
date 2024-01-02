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

fs.readFile('file.txt','utf-8',(err,data)=>{
    if(err){
        console.log('error reading file:',err.message);
    }
    else{
        fs.writeFile('file.txt',data.replace(/\s+/g,' '),(err,data)=>{
            if(err){
                console.log('error writing file:',err.message);
            }
            else{
                console.log("edited file succesfully");
            }
        })

    }
})