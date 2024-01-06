/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
  const startTime = new Date(); // Record the start time

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  const endTime = new Date(); // Record the end time
  const elapsedTime = (endTime - startTime) / 1000; // Calculate the elapsed time in seconds

  return elapsedTime;
}

// Test the function for different values of n
console.log("Time taken for sum from 1-100:", calculateTime(100));
console.log("Time taken for sum from 1-100000:", calculateTime(100000));
console.log("Time taken for sum from 1-1000000000:", calculateTime(1000000000));
