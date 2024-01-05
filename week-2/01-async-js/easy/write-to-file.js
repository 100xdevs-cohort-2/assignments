//writing a file using fs lib
const fs = require('fs');
const msg = `This is the message I have written
jai sri ram!
jai sri ram!
jai sri ram!`;
fs.writeFile('read.txt',msg,function(err){
    if(err){
        console.error(err);
    }
})
function expensiveTask(){
    let a=0
    for (let i = 0; i < 10000000000; i++) {
        a++;
    }
}
expensiveTask();
