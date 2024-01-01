const fs = require('fs');
fs.writeFile('../4-write-to-file.md','Hello world','utf-8',()=>{
    console.log('completed writing a file');
})