const fs =require("fs");

fs.readFile("read.txt","UTF-8",function(err,data){
    console.log(data)
})