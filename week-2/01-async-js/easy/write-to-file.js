const fs = require("fs");

function writeFiles(){
    fs.writeFile('a.txt', "This is an text inserted using fs.writeFile.", "utf-8", (err) => {
        if(err){
            console.log(err);
            return;
        } else{
            console.log("File has been successfully written")
        }
    });
}

writeFiles()