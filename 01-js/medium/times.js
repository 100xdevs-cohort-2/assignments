/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateSumUpToN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function calculateTime(n) {
    const startTime = new Date().getTime();
    const result = calculateSumUpToN(n);
    const endTime = new Date().getTime();
    const elapsedTime = endTime - startTime;
    return { result, elapsedTime };
}

// Example usage:
const n1 = 100;
const n2 = 100000;
const n3 = 1000000000;

console.log(`Sum from 1 to ${n1}:`);
const { result: sum1, elapsedTime: time1 } = calculateTime(n1);
console.log(`Result: ${sum1}, Elapsed Time: ${time1} milliseconds`);

console.log(`Sum from 1 to ${n2}:`);
const { result: sum2, elapsedTime: time2 } = calculateTime(n2);
console.log(`Result: ${sum2}, Elapsed Time: ${time2} milliseconds`);

console.log(`Sum from 1 to ${n3}:`);
const { result: sum3, elapsedTime: time3 } = calculateTime(n3);
console.log(`Result: ${sum3}, Elapsed Time: ${time3} milliseconds`);