/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function calculateSumTime(n) {
    const startTime = new Date();
    calculateSum(n);
    const endTime = new Date();
    const duration = (endTime - startTime);
    return duration / 1000;
}


console.log("Time for sum 1-100: " + calculateSumTime(100) + " seconds");
console.log("Time for sum 1-100000: " + calculateSumTime(100000) + " seconds");
console.log("Time for sum 1-1000000000: " + calculateSumTime(1000000000) + " seconds");
