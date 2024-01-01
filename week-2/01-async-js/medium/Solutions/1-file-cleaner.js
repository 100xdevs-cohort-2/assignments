const fs = require('fs');

function fileCleaner(filePath){
    fs.readFile(filePath,'utf-8',(err,data)=>{
        if(err){
            console.log('Error reading the file',err);
            return;
        }
        data = data.replace(/ {2,}/g, ' ');
        // data = data.replace(/ {2,}/g, ' ').replace(/\t/g, ' ');

        /*data = data.replace(/[^\S\r\n]+/g, ' ')
        \r is carriage retuirn used in programming lang for newline 
        console.log(data);*/

        fs.writeFile(filePath,data,'utf-8',(err)=>{
            if(err){
                console.log("Error occured : ",err);
                return
            }
            console.log("file cleaned sucessfully");
        })
    })
};

fileCleaner('../1-file-cleaner.md');

