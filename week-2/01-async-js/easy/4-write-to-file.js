const { error } = require("console");
const fs= require("fs");
fs.writeFile("a.txt","avdhut kulkarni","utf-8",function(err){
    if(err) throw new error("file not found")
    else{
        console.log("File has written successfully")
    }
})