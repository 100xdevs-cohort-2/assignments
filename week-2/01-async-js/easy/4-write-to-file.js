const fs = require("fs");

function filewrite(){
    fs.writeFile("fileRead.txt","is all data first getiing rewrite in file",function(err){
        console.log("file sucessfully writed")
    })
}
filewrite();