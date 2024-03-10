const fs = require('fs');

let existingContent = fs.readFileSync('file1.txt', 'utf8');
console.log(existingContent);

let newString = existingContent.replace(/\s+/g, ' ');
console.log(newString);

fs.writeFile('file1.txt', newString, err => { });

