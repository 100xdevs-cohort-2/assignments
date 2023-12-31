const fs = require("fs");

fs.readFile("read.txt", "utf8", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
simulateExpensiveOperation();

function simulateExpensiveOperation() {
  const startTime = Date.now();

  let sum = 0;
  // Simulate an expensive loop
  for (let i = 0; i < 10000000000; i++) {
    sum += i;
  }

  const endTime = Date.now();
  const elapsedTime = endTime - startTime;

  console.log(`Expensive operation completed in ${elapsedTime} milliseconds.`);
}
