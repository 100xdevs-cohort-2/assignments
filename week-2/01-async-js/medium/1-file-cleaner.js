const fs = require('fs')

function readAndWrite() {
    fs.readFile('a.txt', 'utf8', function(error, data) {
        fs.writeFile('a.txt', data.replace(/  +/g, ' '), function (error) {
            console.log('Data written successfully')
        });
    });
}

readAndWrite();