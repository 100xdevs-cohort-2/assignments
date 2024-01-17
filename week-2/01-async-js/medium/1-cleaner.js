const { log } = require("console");
const fs = require("fs");

fs.readFile("book.txt", "utf8", (err, data)=>{
    let result = data.replace(/\s+/g, ' ').trim();
    console.log(result);

    fs.writeFile("book.txt", result, (err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Successfully written.");
        }
    })
})