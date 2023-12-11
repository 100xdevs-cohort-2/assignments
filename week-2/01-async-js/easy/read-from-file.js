const fs = require("fs");
let a =0;

function reading(){
fs.readFile("a.txt","utf-8",(err,data)=>{
    console.log(data);
})
}

reading();
let n = 1000000000;
for (i=0;i<n;i++){
    a+=i;
}


console.log(a);
