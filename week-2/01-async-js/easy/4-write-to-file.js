const fs = require("fs");

const content = "inserting some content in readfile.txt";

fs.writeFile("read.txt",content,"UTF-8",function(err,data){
    if(err){
        console.log('something error')
    }else{
        console.log("content inserted sucessfully ")
    }
    
})