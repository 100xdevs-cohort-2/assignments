const fs = require("fs");

fs.writeFile("a2.txt", "I wrote this using fs ;)", (err, data)=>{
    if(err){
        return console.error(err);
    }
    console.log("Saved !")
})

fs.appendFile("a.txt", "\nThis line is appended by fs!!", (err, data)=>{
    if(err){
        return console.error(err);
    }
    console.log("Appended!");
});