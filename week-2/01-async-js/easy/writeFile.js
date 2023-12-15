const fs = require('fs')

const path = 'file.txt';

const content = "\nlikh diya bhai.";

fs.writeFile(path,content,'utf-8',(err)=>{
    if(err){
        console.log(`Error writing to file: ${err.message}`)
        return
    }
    console.log("Successfully write to file")
})