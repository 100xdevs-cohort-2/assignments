const fs = require('fs');
function readFromFile(file) {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });
}
let file  = `${__dirname}/3-read-from-file.md`;
readFromFile(file);

console.log("hi i am souvik.")

let sum = 0;
for(let i=0;i<100000000;i++){
    sum += i;
}
console.log(sum);