/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/


const beforeCallingFn = new Date().getTime(); // returns number of milliseconds from 1 Jan 1970 00:00:00
function calculateTime(n) {
    let answer = 0;

    for(let index = 0 ; index <= n ; index++) {
        answer += index
    }

    return answer;
}

calculateTime(1000000);

const afterCallingFn = new Date().getTime();

const totalSeconds = (afterCallingFn - beforeCallingFn) / 1000;
console.log(totalSeconds);