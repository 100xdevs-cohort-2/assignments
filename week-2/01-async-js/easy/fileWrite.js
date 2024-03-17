const fs = require('fs');
const readLine = require('readline');


const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

function writeFile(filePath,message){
    fs.writeFile(filePath,message,'utf-8',(err)=>{
        if(err){
            console.log(err);
            return; 
        }
        console.log('Write operation successfully finished');
    })
}   

const outputFile = '/home/rohan/assignments/assignments/week-2/01-async-js/easy/appendWrite.txt';

rl.question('Enter the data to write to the file: ',(data)=>{
    writeFile(outputFile,data);
    rl.close();
})