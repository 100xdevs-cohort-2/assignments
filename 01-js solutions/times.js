/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function timeToSum(n) {
    const start = new Date();
  
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i; 
    }
  
    const end = new Date();
    const timeTaken = (end - start) / 1000; 
  
    return timeTaken;
  }
  
  const time1 = timeToSum(100); 
  const time2 = timeToSum(100000);
  const time3 = timeToSum(1000000000);
  
  console.log(time1, time2, time3);

  module.exports = timeToSum;
  
  
  
  