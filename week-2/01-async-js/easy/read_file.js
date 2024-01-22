const readData = new Promise(function (resolve, reject) {
    const fs = require('fs');
    fs.readFile('read-from-file.md', 'utf-8', function (err, data) {
        if (err) {
            reject(err);
        } else {
            resolve(data);
        }
    });
});

readData.then((data) => {
    console.log(data);
}).catch((err) => {
    console.error('Error reading file:', err);
});