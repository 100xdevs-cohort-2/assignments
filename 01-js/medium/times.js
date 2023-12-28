/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

const { start } = require("repl");
let startTime = performance.now();
let endTime =0;
function calculateTime(n) {
   
    
    let ans = 0
    let ind = 0;
    for (let index = 1; index <= n; index++) {
        ans = ans + index;
        ind =index;
    }


}

calculateTime(1000);
endTime=performance.now();
console.log((endTime-startTime)/1000);