const fs = require('fs');
const path = require('path');

/**
 * @summary Write code to read contents of a file and print it to the console.
 * You can use the fs library to as a black box, the goal is to understand async tasks.
 * Try to do an expensive operation below the file read and see how it affects the output.
 * Make the expensive operation more and more expensive and see how it affects the output.
 * @param {string} fileName - Provide the file name to read content from
 */
function getContent(fileName = 'sample.txt') {
  const filePath = path.join(`${__dirname}/${fileName}`);

  fs.readFile(filePath, 'utf-8', (err, fileContent) => {
    if (err) throw err;

    console.log({ fileContent });
  });

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

getContent();
