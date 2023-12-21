'use strict';

const fs = require('fs');

let fInput = "Input to file";

fs.writeFile('file.txt', fInput, (err) => {
    if(err) throw err;
    console.log('The file has been saved!');
});