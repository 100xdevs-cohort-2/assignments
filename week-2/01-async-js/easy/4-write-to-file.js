const fs = require('fs')
let content = 'some random shit'
fs.writeFile('temp.txt',content, (err)=>{
    if(err){
        console.log('some shit happened')
    }
    else
    console.log("you're good to go")
})