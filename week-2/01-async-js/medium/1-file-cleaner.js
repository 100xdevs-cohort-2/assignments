const fs= require("fs");
fs.readFile("file.txt","utf-8",function(err,data){
    if(err){
        console.log('error')
    }
    else{
        const str=data.replace(/\s+/g," ")
        console.log(str)
    }
})