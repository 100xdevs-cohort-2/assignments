const fs = require('fs');

console.log("Hey there!!!!! , Reading File Is Started")

fs.readFile('week-2/01-async-js/easy/files.txt', 'utf-8', (err, data) => {
    console.log(data);
    console.log("File Readed Successfully")
})

console.log("On our sync function")

let a = 0;
for (let i = 0; i < 100000000; i++) {
    a += 1

}
console.log(a)

