const fs = require('fs');
const path = require('path');

const readFile = () => {

    fs.readFile(path.join(__dirname, 'example.txt'), 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
        } else {
            console.log('File contents:', data);
        }
    });

    setTimeout(()=>{
        console.log(`Don't mind me `);
    }, 2000);

};

readFile();