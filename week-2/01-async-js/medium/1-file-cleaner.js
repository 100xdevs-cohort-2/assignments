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

const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');


const p = new Promise((resolve,reject)=>{
    fs.readFile('temp.txt','utf-8',(err,data)=>{
       if(err){
        reject("Unable to read file")
       }

       let dataWithoutExtraSpace = data.replace(/\s+/g,' ')
       resolve(dataWithoutExtraSpace)
    })


})

p.then((data)=>{
    fs.writeFile('temp.txt',data,(err)=>{
        if(err){
            console.log("error writing to file",err);
        }
        console.log("writing file success");
    })
})
