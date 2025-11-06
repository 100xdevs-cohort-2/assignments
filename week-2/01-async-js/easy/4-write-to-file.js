// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

async function k(){
    fs.readFile("./week-2/01-async-js/easy/a.txt",(err,data)=>{
        console.log(data.toString());
        fs.writeFile("./week-2/01-async-js/easy/a.txt","this file is written by write-to-file.js file",()=>{
            fs.readFile("./week-2/01-async-js/easy/a.txt",(err,data)=>{
                console.log(data.toString());
            })
        })
    })   
}

k()