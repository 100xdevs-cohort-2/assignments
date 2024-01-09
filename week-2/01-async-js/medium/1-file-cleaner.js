const fs = require('fs');
let fileName = '1-text.txt';

fs.readFile(fileName, (err, data) => {
    if(err) throw err;
    let modifiedData = data.toString().split(' ').filter((word) => word != '').join(' ');

    fs.writeFile(fileName, modifiedData, (err) => {
        if(err) throw err;
        console.log("\nModified data added successfully\n");
    })
})