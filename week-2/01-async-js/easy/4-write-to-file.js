const fs = require('fs')

function writeFile() {
    fs.writeFile('/home/nikhil/100xdevs-assignments/week-2/01-async-js/easy/4-write-to-file.md', 'This is content from program', (err) => {
        if (err) {
            console.log(err.message);
            return
        }

        console.log('File write opertion success');
    })
}

writeFile()