const fs = require('fs');
const path = require('path');

/**
 * @summary Write to a file
 * Using the fs library again, try to write to the contents of a file.
 * You can use the fs library to as a black box, the goal is to understand async tasks.
 * @param {string} fileName - Provide the file name to write content on
 * @param {string} addOnContent - Provide the add on content which needs to be added to the file
 */
function addContent(fileName = 'sample.txt', addOnContent = '') {
  const filePath = path.join(`${__dirname}/${fileName}`);

  fs.writeFile(
    filePath,
    addOnContent ? `\n${addOnContent}` : '',
    { encoding: 'utf8', flag: 'a' },
    (err) => {
      if (err) throw err;

      console.log(`Data has been written to ${fileName}`);
    }
  );

  simulateExpensiveOperation();
}

/**
 * @summary Simulates expensive calculation to check the effect on the file read method
 * @param {number} loopLimit
 */
function simulateExpensiveOperation(loopLimit = 1000) {
  let sum = 0,
    idx = 0;

  const startTime = +new Date();

  while (idx++ < loopLimit) {
    sum += idx;
  }

  const endTime = +new Date();
  console.log({ timeDiffInMS: endTime - startTime });
}

addContent('sample.txt');
