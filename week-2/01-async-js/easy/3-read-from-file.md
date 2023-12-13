

const fs = require('fs');



function readFileAndPrint(file) {
  fs.readFile("a.txt", 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err.message}`);
    } else {
      console.log(`File contents: ${data}`);

      
      simulateExpensiveOperation();
    }
  });
}


function simulateExpensiveOperation() {
  const startTime = Date.now();

 
  for (let i = 0; i < 100; i++) {
    


  }

  const endTime = Date.now();
  console.log(`Expensive operation completed in ${endTime - startTime} milliseconds`);
}

<!-- // Specify the filename -->
const filename = 'a.txt';

<!-- // Read the file and print its contents to the console -->
readFileAndPrint(filename);
