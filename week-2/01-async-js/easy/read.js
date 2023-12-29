const fs = require('fs');

function readFileAndPrint(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        reject(`Error reading file: ${err}`);
        return;
      }

      console.log(`File Contents:\n${data}`);
      resolve();
    });
  });
}



async function simulateExpensiveOperation() {
  return new Promise(resolve => {
    const iterations = 1000000000;

    console.log('Starting expensive operation...');

    for (let i = 0; i < iterations; i++) {
      // This loop simulates an expensive operation
    }

    console.log('Expensive operation complete.');
    resolve();
  });
}

async function run() {
  const filePath = 'week-2\\01-async-js\\easy\\1-counter.md';

  await readFileAndPrint(filePath);
  await simulateExpensiveOperation();
  await writeFile(filePath,"I am having fun coding.")
}

run();
