const fs = require('fs');
let FilePath = 'b.txt';
function ReadFile(FilePath){
    fs.readFile(FilePath,'utf-8', (err,data) => {
        if(err){
            console.log(err);
        }else{
            data = data.replace(/\s+/g, ' ');
            data = data.trim();
            fs.writeFile(FilePath,data,(err) => {
                if(err){
                    console.log(err);
                }else{
                    console.log("operation successful");
                }
            });
        }
    });
}

ReadFile(FilePath);