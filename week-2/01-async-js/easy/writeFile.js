const fs = require('fs');

fs.writeFile('4-write-to-file.md','The file got modified by the user', (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('The data got modified');
    }
})