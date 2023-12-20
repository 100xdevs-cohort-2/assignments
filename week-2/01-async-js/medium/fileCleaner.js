const fs = require('fs');

fs.readFile('dummyFile.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        data = data.split(' ');
        let s = '';
        data.forEach(word => {
            if (word !== '') {
                s = s + word + ' ';
            }
        });
        fs.writeFile('dummyFile.txt', s, (err) => {if (err) {console.log(err)}});
    }
});