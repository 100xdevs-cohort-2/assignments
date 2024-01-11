// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs=require("fs");
let data = "In this file we are write data to file a.txt";

function writeTofile(){
    fs.writeFile("a.txt",data,(err)=>{
        if(err) throw err;
    })
}
writeTofile()