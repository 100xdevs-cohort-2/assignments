/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function  calculateTime(n) {
  const dateTime = new Date();
  const beforeDate = dateTime.getTime();

  let a = 0;
  for (let i = 0; i < n; i++) {
    a += i;
  }
  const dateTime2 = new Date();
  const afterDate = dateTime2.getTime();
  return afterDate - beforeDate;
}

console.log("100 ------------ " + calculateTime(100));
console.log("1000 ------------ " + calculateTime(1000));
console.log("10000 ------------ " + calculateTime(10000));
console.log("100000 ------------ " + calculateTime(100000));
console.log("1000000 ------------ " + calculateTime(1000000));
console.log("10000000 ------------ " + calculateTime(10000000));
console.log("100000000 ------------ " + calculateTime(100000000));
console.log("1000000000 ------------ " + calculateTime(1000000000));

