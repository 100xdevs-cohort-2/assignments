const fs = require('fs');
fs.readFile('a.txt', 'UTF-8', (err, data) => {
    console.log(data);
})