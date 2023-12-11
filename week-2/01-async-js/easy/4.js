// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs=require('fs')

fs.readFile('4.js','utf-8',(err,data)=>{
    fs.writeFile('4-js',data,(err)=>{
        console.log(err);
    })
})