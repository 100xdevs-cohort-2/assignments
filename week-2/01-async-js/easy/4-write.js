const fs = require("fs");

let data = "I am writing.";

fs.writeFile("book.txt", data, (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Successfully written.");
    }
})