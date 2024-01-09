const fs = require("fs");

fs.readFile("./week-2/01-async-js/medium/sample.txt", "utf-8", (err,data) =>{
    let fileData = data;
    console.log(fileData)
    fileData=fileData.replace(/\s+/g, ' ');
    console.log(fileData)
    fs.writeFile("./week-2/01-async-js/medium/sample.txt", fileData, (err)=>{
        if(err)console.log(err)
    })
})