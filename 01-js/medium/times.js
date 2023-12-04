/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/
// import { createInterface } from 'readline';
const readline = require('readline')
function calculateTime(n) {
  let title = "Calculate the time of computation";
  let timeStamp = "Time stamp"
  console.time(title);
  let sum = 0;
  for (let I = 1; I <= n; I++) {
    sum += I;
  }
  console.timeEnd(title);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (n) => {
    calculateTime(parseInt(n));
    rl.close();
  });
