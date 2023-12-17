/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/
const computeSum = (num) => {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

function calculateTime() {
    let startTime = new Date().getTime();
    computeSum(100);
    let endTime = new Date().getTime();
    console.log("Time to compute sum from 1-100: " + (endTime - startTime));

    startTime = new Date().getTime();
    computeSum(100000);
    endTime = new Date().getTime();
    console.log("Time to compute sum from 1-100000: " + (endTime - startTime));

    startTime = new Date().getTime();
    computeSum(1000000000);
    endTime = new Date().getTime();
    console.log("Time to compute sum from 1-1000000000: " + (endTime - startTime));
    return 0.01;
}

calculateTime();