const fs=require('fs')

fs.readFile('4-write-to-file.md','utf-8',(err,data)=>{
    // data="aaaa"
    fs.writeFile('4-write-to-file.md',data,(err)=>{
        console.log(err);
    })
})