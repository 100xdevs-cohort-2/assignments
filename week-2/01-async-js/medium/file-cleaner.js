const fs = require("fs");

fs.readFile("content.txt","utf-8",function(err,data){
    let content = data.trim().split(' ');

    let finalContent = "";

    content.forEach(function(item){
        if(item!="" && item!=" "){
            finalContent+=(item+" ");
        }
    })

    fs.writeFile("content.txt",finalContent,function(){
        console.log("File has been successfully cleaned");
    })



})