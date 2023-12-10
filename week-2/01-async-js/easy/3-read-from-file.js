const fs = require('fs')
fs.readFile('temp.txt','utf-8', (err,data)=>{
    if(err){
        console.log('some shit happened')
    }
    else
        console.log(data)
})