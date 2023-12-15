const fs = require('fs');

function read() {
    fs.readFile('demo.txt','utf-8',function(err,data) {
        console.log(data);
    });
}

read();

let a = 0
for(let i=1; i<=100000000; i++) {
    a += i;
}

console.log(a);