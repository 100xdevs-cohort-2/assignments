const fs = require('fs');

fs.writeFileSync('./file.txt', "Write data from node!", 'utf8',  (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});