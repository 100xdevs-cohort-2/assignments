const { error } = require('console');
const fs = require('fs');

fs.readFile("file.txt", "utf-8", (err, data) =>{
    if (err) throw error;
    let cleanedData = data.replace(/\s+/g, ' ');
    // console.log(cleanedData);
    fs.writeFile("file.txt", cleanedData, (err) =>{
        if(err) throw error;
        console.log("Done!!");
    });
});