const fs = require("fs");

const data = "New text written 2";
fs.writeFile("content.txt", data, (err)=>{
    if(err) {
        console.log(err);
    }
    else{
        console.log("Written to content.txt successfully");
    }
});