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
    let start = new Date();
    let sum = 0;
    for (let i = 1; i < n; i++){
        sum += i;
    }
    let end = new Date();
    let diff = end - start/1000;
    return diff;
}
const time1 = calculateTime(100);
const time2 = calculateTime(100000);
const time3 = calculateTime(1000000000);

console.log(`Time taken for sum from 1 to 100: ${time1} seconds`);
console.log(`Time taken for sum from 1 to 100000: ${time2} seconds`);
console.log(`Time taken for sum from 1 to 1000000000: ${time3} seconds`);