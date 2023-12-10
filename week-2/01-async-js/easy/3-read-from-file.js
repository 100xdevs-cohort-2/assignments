const fs = require('fs');
const path = require('path');

function read(path){
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
}


try{
    read('./week-2/01-async-js/easy/sample.txt');
} catch(err){
    console.log(err);
}