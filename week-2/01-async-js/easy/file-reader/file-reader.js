'use strict';

const fs = require('fs');

//read a file
let fInput = "Input to file";
fs.readFile('/Users/akshay.thakur/Documents/personal/assignments/week-2/01-async-js/easy/file-reader/file.txt', (err, data) =>{
    if(err) throw err;

    console.log(data.toString());   
});
