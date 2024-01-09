const fs = require('fs')

function readnow(filename, count) {
    fs.readFile(filename, 'utf8', function (err, data) {
        count(data);
    })
}

readnow("3-read-from-file.txt", (data) => {
    console.log(data);
    console.log("Done Reading\n*****************");
});

console.log("Here is Your text\n*****************")

for(let i=0;i<10000000000;i++){

}