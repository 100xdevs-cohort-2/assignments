const fs=require("fs");

function readFile(){
    fs.readFile('a.txt','utf-8',(err,data)=>{
        console.log(data);
    })
}

function f1(){
    let ans=1;
    for(let i=1;i<500000;i++){
        console.log(ans);
    }
}


function f2(){
let ans=1;
for(let i=1;i<100;i++){
    ans*=i;
    console.log(ans);
}
console.log(ans);
}


readFile();
f1();
f2();



