// Read the file
// remove all extra spaces
//write the same file

const fs = require('fs');
let file = 'a.txt';
fileCleaner=(file)=>{
    fs.readFile(file, 'utf-8', (err, data)=>{
        if(err){
            console.error(err)
        }
        const fdata = data.replace(/\s+/g, ' ');
        fs.writeFile(file,fdata,(err)=>{
            if(err){
                console.error(err)
            }
        })
    })

}
fileCleaner(file);