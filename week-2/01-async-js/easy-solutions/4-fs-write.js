const fs = require('fs');
function writeToFile(filename, content) {
    fs.writeFile(filename, content, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return;
        }
        console.log('File written successfully');
    });
}

const filename = './write.txt';
const content = 'Hello, My name is Krishna, What is Your Name ???';
writeToFile(filename, content);
