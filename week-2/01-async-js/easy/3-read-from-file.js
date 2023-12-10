const fs = require('fs')

function readFile() {
    fs.readFile('/home/nikhil/100xdevs-assignments/week-2/01-async-js/easy/3-read-from-file.md', (err, data) => {
        if (err) {
            console.log(err.message);
            return
        }


        console.log(data.toString());
    })
}

readFile()

console.log('expensive operation');

for (let i = 0; i < 100000000000; i++) {

}

console.log('expensive operation completed');