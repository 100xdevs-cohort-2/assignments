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
    const startTime = new Date().getTime();

    // Your code to calculate the sum from 1 to n goes here
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    const endTime = new Date().getTime();
    const elapsedTimeInSeconds = (endTime - startTime) / 1000;

    return elapsedTimeInSeconds;
}

// Example usage
const result1 = calculateTime(100);
console.log(`Time taken for sum from 1-100: ${result1} seconds`);

const result2 = calculateTime(100000);
console.log(`Time taken for sum from 1-100000: ${result2} seconds`);

const result3 = calculateTime(1000000000);
console.log(`Time taken for sum from 1-1000000000: ${result3} seconds`);
