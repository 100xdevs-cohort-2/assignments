fs = require("fs")
fs.readFile("file.txt","utf-8", (err, data)=>{
    console.log(data)
})