// below file reading is async operation , however it will read file asynchronouly  
// but console will wait until to finish sync fuction which is for loop
const { constants } = require('buffer');
const fs = require('fs');
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.log("Error while reading file ", err);
        return;
    }
    console.log("File content", data);
})

// expensive operation
let sum = 0;
console.log("called");
for (let i = 0; i <= 999999999; i++) {
    sum += i;
}
console.log(sum)


