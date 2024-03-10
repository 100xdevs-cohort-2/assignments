const fs = require('fs');

const path = 'file.txt';

fs.readFile(path,'utf-8',(err,data)=>{
    if(err){
        console.log(`Error reading file: ${err.message}`)
        return;
    }
    console.log("File content:"+data);
})
