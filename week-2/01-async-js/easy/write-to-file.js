const fs = require("fs");
const data = " writing from one file to another file"
fs.writeFile("a.txt",data,(err)=>{
    if (err){
        console.log(err);
    }
    else{
        console.log("written successfully");
    }
})
