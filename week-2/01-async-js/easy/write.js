const fs = require('fs');


function writeinfile(filename) {
    fs.writeFile(filename, 'My name is vinamra jain', (err) => {

        if (err) {
            console.log("Error in writing data");
        }
    })
}

writeinfile('4-write-to-file.md');