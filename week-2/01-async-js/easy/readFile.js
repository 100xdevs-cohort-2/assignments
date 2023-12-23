const fs = require('fs');

fs.readFile('./3-read-from-file.md','utf-8',(err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
})

for (let i = 0; i < 1000000; i++) {
    console.log(i);
}