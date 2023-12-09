const fs=require('fs')

fs.readFile('newText.txt','utf-8',(err,data)=>{
    console.log(`data of this files are \n ${data}`)
})