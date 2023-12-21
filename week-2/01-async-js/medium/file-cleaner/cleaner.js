const fs = require('fs');

let fileContent = "";
//read a file
fs.readFile('/Users/akshay.thakur/Documents/personal/assignments/week-2/01-async-js/medium/file-cleaner/file.txt', 'utf-8', (err, data) =>{
    if(err) throw err;
    contentCleaner(data);
});


function contentCleaner(data){
    data.toString().split('\n').forEach(function(item, index){
        fileContent += item.replace(/\s+/g,' ').trim() + '\n';
    });
    writeToFile(fileContent);
}

function writeToFile(data){
    fs.writeFile('/Users/akshay.thakur/Documents/personal/assignments/week-2/01-async-js/medium/file-cleaner/file.txt', data, (err) =>{
        if(err) throw err;
        console.log('File cleaned successfully');
    });
}


