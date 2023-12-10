const fs=require('fs')

fs.readFile('3-read-from-file.md','utf-8',(err,data)=>{
    console.log(err,data)
})