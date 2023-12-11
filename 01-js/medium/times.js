/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateSumTime(n) {
  // to record the start time
  const startTime = new Date();

  // to calculate the sum
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  // to record the end time
  const endTime = new Date();

  // to calculate the time difference in seconds
  const elapsedTime = (endTime - startTime) / 1000;

  return {
    sum,
    elapsedTime,
  };
}

const result1 = calculateSumTime(100);
console.log("Sum:", result1.sum);
console.log("Time taken:", result1.elapsedTime, "seconds");

const result2 = calculateSumTime(100000);
console.log("Sum:", result2.sum);
console.log("Time taken:", result2.elapsedTime, "seconds");

const result3 = calculateSumTime(1000000000);
console.log("Sum:", result3.sum);
console.log("Time taken:", result3.elapsedTime, "seconds");
