/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(num) {
    function sum(n) {
      let total = 0;
      for (let i = 1; i <= n; i++) {
        total += i;
      }
      console.log(total);
    }
  
    const time = new Date();
    const beforeTime = time.getSeconds();
    sum(num)
    const afterTime = time.getMilliseconds();
    const timer = afterTime - beforeTime;
    console.log(`${timer} ms`);
    return 0.01;
  }
  
  calculateTime(1000000)
