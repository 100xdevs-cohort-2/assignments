const fs = require("fs");

const str = " hey buddy what's up !!"

// for overwriting all file data

fs.writeFile("a.txt",str,"utf-8",(err) =>{
    if(err){
        console.log("there is some error which is " + err);
    }
    else{
        console.log("File overwrite successfull")
    }
});


//for appending string to the file
fs.appendFile("a.txt","new added line","utf-8",(err) =>{
    if(err){
        console.log("there is some error which is " + err);
    }
    else{
        console.log("File appended successfull")
    }
})