const fs = require('fs');
const filePath = '../medium/file.txt';

fs.readFile(filePath , 'utf-8' , function(err, data){
    if(err){
        console.error(err);
    }
    let originalText = data;
    console.log(originalText);
    let cleanText = originalText.replace(/\s+/g, ' ');

    fs.writeFile(filePath, cleanText, 'utf-8' , function(err, data){
        if(err){
            console.error(err);
        }
        console.log(cleanText);
    });
});

