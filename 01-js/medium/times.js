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
  // Sum from 1-100
  const startTime = new Date().getTime();
  let sum1 = 0;
  for (let i = 1; i < 101; i++) sum1 += i;
  const sum1Time = new Date().getTime();

  let sum2 = 0;
  for (let i = 1; i < 100001; i++) sum2 += i;
  const sum2Time = new Date().getTime();

  let sum3 = 0;
  for (let i = 1; i < 1000000000; i++) sum3 += i;
  const sum3Time = new Date().getTime();

}

calculateTime();
