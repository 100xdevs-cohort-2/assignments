const fs = require("fs");

fs.readFile("1-file-cleaner.txt", "utf-8", (err, data)=>{
    if(err){
        console.log(err);
        return;
    }
    let newStr = data.replace(/\s+/g, ' ');
    console.log(newStr);
})