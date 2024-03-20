/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

const readline = require("readline");

function calculateTime(n) {
  const startTime = Date.now();
  let endTime = null;
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
    if (i === n) {
      endTime = Date.now();
    }
  }
  console.log((endTime - startTime) / 1000);
  return (endTime - startTime) / 1000;
}

calculateTime(10000);

// Taking input from the user (via command line arguments or other means)
// const n = parseInt(process.argv[2], 10);

// Check if the input is a valid number
// if (isNaN(n)) {
//   console.log("Please provide a valid number as input.");
// } else {
// Call the function and display the result
//   const timeTaken = calculateTime(n);
//   console.log(`
//     ${timeTaken / 1000}`);
// }

// Taking input from the user (via readline)
// const processInput = (input) => {
//   const n = parseInt(input, 10);
//   // Check if the input is a valid number
//   if (isNaN(n)) {
//     console.log("Please provide a valid number as input.");
//   } else {
//     // Call the function and display the result
//     const timeTaken = calculateTime(n);
//     console.log(`Sum of numbers from 1 to ${n}: ${timeTaken} milliseconds`);
//   }
//   rl.close();
// };

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdin,
// });

// rl.question("Enter a number: ", (input) => {
//   const n = parseInt(input, 10);

//   // Check if the input is a valid number
//   if (isNaN(n)) {
//     console.log("Please provide a valid number as input.");
//     rl.close();
//     return;
//   }

//   // Call the function and display the result
//   const timeTaken = calculateTime(n);
//   console.log(`Sum of numbers from 1 to ${n}: ${timeTaken} milliseconds`);

//   rl.close();
// });
