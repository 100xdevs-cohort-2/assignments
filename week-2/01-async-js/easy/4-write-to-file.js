const fs = require('fs');

let data = 'This is the content of writeTest.md';
fs.writeFile('writeTest.md', data, (err)=>{
    console.log(err);
    if(err) console.log(err);
    else{
        console.log('File is written succesfully')
    }
})
