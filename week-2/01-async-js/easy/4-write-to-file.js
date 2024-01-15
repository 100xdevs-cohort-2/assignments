const fs = require('fs')

function read(filename) {
    fs.readFile(filename, 'utf8', function (err, data) {
        console.log(data);
        data = data + "\n I am fine bro"
        fs.writeFile(filename, data, (err) => {
            if (err) throw err;
            else {
                console.log("Writing done")
            }
            console.log(data);
        })
    })
}
read("4-write-to-file.txt")