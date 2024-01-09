let count = () => {for(let i=0; i<=1000000; i++){
    console.log(i);
}}
count();
const fs = require('fs');
fs.readFile('3-one-piece.txt', 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
})

count();