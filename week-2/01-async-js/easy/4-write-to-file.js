const fs = require('fs');
let data = 'let check if this data is replace in file2';
// below function is use to write in to file and replace existing data
fs.writeFile('file2.txt', data, function (err) { });
// below function use to append the data into same file without replacing
fs.appendFile('file2.txt', data, function (err) { });
