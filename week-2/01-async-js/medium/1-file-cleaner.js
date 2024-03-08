/**
 * File cleaner
 * Read a file, remove all the extra spaces and write it back to the same file.
 * 
 * For example, if the file input was
 * hello     world    my    name   is       raman
 * 
 * After the program runs, the output should be
 * 
 * hello world my name is raman
 */

const fs = require('fs');
// let str;
const path = "/workspaces/100Xdevs/Week-2/assignments/01-async-js/medium/a.txt"
// Reading from a file
fs.readFile(path, 'utf8', (err, data) => {
  if (err) throw err;
  let str = data;
  console.log(str);
  str = str.replace(/\s+/g,' ').trim();
  // Writting again to the same file
  fs.writeFile(path, str, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
  console.log(str);
});

