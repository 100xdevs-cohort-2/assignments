const fs = require('fs');
const path = require('path');

/**
 * @summary File cleaner
 * Read a file, remove all the extra spaces and write it back to the same file.
 * For example, if the file input was
 * ```
 * hello     world    my    name   is       raman
 * ```
 * After the program runs, the output should be
 * ```
 * hello world my name is raman
 * ```
 * @param {string} fileName - Provide the file name to read content from
 */
function getContent(fileName = 'file.txt') {
  const filePath = path.join(`${__dirname}/${fileName}`);

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) throw err;

    const fileContent = data
      .split(' ')
      .filter((word) => word !== '')
      .join(' ');

    fs.writeFile(filePath, fileContent, { encoding: 'utf8' }, (err) => {
      if (err) throw err;
      console.log(`${fileName} has been cleaned`);
    });
  });
}

getContent();
