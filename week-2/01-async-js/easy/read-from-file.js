const fs = require('fs');

fs.readFile('a.txt','utf-8',(err,data)=>{
    console.log("The data from the file is :" + data);
})

let c = 0;
for(let i=0; i<100000; i++){
    c++;
}

console.log("count counted on main Thread is equal to:" + c);
