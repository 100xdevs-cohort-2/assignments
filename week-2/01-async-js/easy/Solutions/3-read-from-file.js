const fs = require('fs');
fs.readFile('../3-read-from-file.md','utf-8',(err,data)=>{
    console.log(data);

});

let count  = 0;
for(;count <= 10000000000;count +=1){
    count +=1;
}; 
console.log("End");
