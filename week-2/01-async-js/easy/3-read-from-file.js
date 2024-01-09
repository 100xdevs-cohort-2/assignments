const fs = require('fs');
const date1 = new Date();

fs.readFile('../easy/sample-file.txt' , 'utf-8' , function(err, data) {
    if (err){
        console.error(err);
        return;
    }
    console.log(data);
    const date2 = new Date();
    console.log('Took ' + (date2 - date1)/1000 + ' seconds');
});

let sum = 0;
for (let i = 0; i < 2000000000; i++) {
    sum += i;
}