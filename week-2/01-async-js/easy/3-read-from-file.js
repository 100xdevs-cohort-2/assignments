const fs = require('fs');

const data = fs.readFileSync('./3-readfile.txt','utf-8');
console.log(data);

for (let i=0;i<10000000000;i++){

}
console.log('loop over');