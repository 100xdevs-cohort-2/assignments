const fs = require('fs');
fs.readFile('a.txt', 'UTF-8', (err, data) => {
    if(err){
        throw new Error("not able to read from file");
    }
    let currData = data;
    currData = currData + "\niwqyf78iuqbb 1kjfiug78qgfuigqivfyqffgiqufviuyqfg87gueqifbkjeqviufguqegfbqeiugf978qgeufb";
    fs.writeFile("a.txt", currData, 'utf-8', (err) => {
        if(err){
            throw new Error("not able to write into file");
        }
        console.log("Write Successful");
    })
})