/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

console.log(calculateTime(100));
console.log(calculateTime(1000000000000000));


function calculateTime(n) {
    const startTime = performance.now();

    // Execute the provided callback function
    sumNum(n);

    // Record the end time
    const endTime = performance.now();

    // Calculate the time difference in seconds
    const executionTimeInSeconds = (endTime - startTime) / 1000;

    // Return the execution time
    return executionTimeInSeconds;

}

function sumNum(num) {
    let sum = 0;
    let i = 1
    while (num > 0) {
        sum += i;
        num--;
    }
}