const fs = require("fs");

function readfile(cb){
    fs.readFile("fileRead.txt","utf-8",(err,data)=>{
        // for(var i =0;i<10000000000000;i++);
        if(err) console.log(err);
        cb(data);
    })
}
function print(data){
    console.log(data);
}

readfile(print);