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
    let sum = 0;
    let currentTime = new Date().getTime();
    for (let i = 0; i < n; i++) {
      sum = sum + i;
    }
    let finalTime = new Date().getTime();
  return finalTime - currentTime;
}
  
console.log(`${calculateTime(1000000000000)} ms`);
console.log(`${calculateTime(10000000000)} ms`);
console.log(`${calculateTime(1000000)} ms`);
   