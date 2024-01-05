//Reading a file using fs lib
const fs = require('fs');
fs.readFile('read.txt', 'utf-8', function(err, data){
    if(err){
        throw console.error(err);
    }
    console.log(data);
})
function expensiveTask(){
    let a=0
    for (let i = 0; i < 10000000000; i++) {
        a++;
    }
}
expensiveTask();
