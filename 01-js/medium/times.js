/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

const { log } = require("console");
const os = require("os");

function calculateTime(n) {
  let startTimeSec = os.uptime();
  let startTimeMS = Date.now();
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  let endTimeSec = os.uptime();
  let endTimeMS = Date.now();

  let elapsedTimeSec = endTimeSec - startTimeSec;
  let elapsedTimeMS = endTimeMS - startTimeMS;

  console.log("Time needed in sec : " + elapsedTimeSec);
  console.log("Time needed in ms : " + elapsedTimeMS);

  return elapsedTimeSec;
}

calculateTime(100);
calculateTime(100000);
calculateTime(1000000000);
