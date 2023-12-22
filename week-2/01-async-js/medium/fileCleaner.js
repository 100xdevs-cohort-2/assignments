const fs = require('fs');


function cleanSpace(path){
    fs.readFile(path, 'utf-8',(err,data) => {
        if(err){
            console.log(err);
            return;
        }
        const modified = data.replace(/\s+/g,' ');
        fs.writeFile(path,modified,'utf-8',(write)=>{
            if(write){
                console.log(write);
                return;
            }
            console.log('Extra spaces removed');
        })
    });
}

cleanSpace('week-2/01-async-js/medium/unCleanedFile.txt');