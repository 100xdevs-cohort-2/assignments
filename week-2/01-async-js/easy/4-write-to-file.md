

const fs = require('fs');

fs.writeFile('textForFsFile.txt',"Hello",'utf-8',(err,data)=>{
    if (err) {
    console.error('Error writing to the file:', err);
    return;
  }
  console.log('File has been written successfully.');
})