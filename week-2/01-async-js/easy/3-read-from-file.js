let fs = require('fs');

function FileReader(){
    fs.readFile("first.txt",'utf-8',function(err,data){
        console.log(data);
    });
}

FileReader();
let i =0;
for(;i<100000000000;i++){
    i++;
}

console.log(i);