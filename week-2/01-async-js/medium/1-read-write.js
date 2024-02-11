const fs = require("fs");

function readfile(){
    fs.readFile("1-read-file.txt","utf-8",function(err,data){
       console.log("Data read")
        let cleanedString = data.split(/\s+/).filter(Boolean).join(' ');
        fs.writeFile("1-read-file.txt",cleanedString,function(err){
            console.log("file written sucessfully")
        });
    })
    
}

readfile();
