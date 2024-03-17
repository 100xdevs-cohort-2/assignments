const fs = require('fs');

function readFileAndPrint(filePath){
    fs.readFile(filePath, 'utf-8',(err,data) => {
        if (err){
            console.log(err);
            return;
        }
        console.log('File Content:', data);
    });
    performExpensive();
}

function performExpensive(){
    const start = Date.now();
    let sum = 0;
    for (let i = 0; i < 1000000000;i++){
        sum += i;
    }
    const end = Date.now();
    console.log('Expensive operation took:',end - start,'ms');
}

const filePath = 'week-2/01-async-js/easy/bigFile.txt';

readFileAndPrint(filePath);