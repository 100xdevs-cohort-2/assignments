// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');
fs.readFile("a.txt","utf-8",(err,data)=>{
    console.log('file data:\n'+data);
})

const dataTOAppend = "This text is added later";
fs.appendFile("a.txt",dataTOAppend,(err,data) => {
    console.log(" "+data);
})