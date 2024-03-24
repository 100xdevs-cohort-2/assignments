const fs = require('fs');

let message = 'Chew glass if you are bored of life';

function write() {
    fs.writeFile('demo.txt',message,function(err) {
        if(err) {
            console.error(err);
        }
        console.log('File has been written');
    })
}

write();