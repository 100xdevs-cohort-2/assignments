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
    let startTime = Date.now();

    let sum = 0;

    for(let i = 1 ; i<=n ; i++){
        sum += i;
    }

    console.log(`Time taken to calculate sum of 1 to ${n} is ${Date.now() - startTime} milliseconds`)
}

calculateTime(100);

calculateTime(100000);

calculateTime(1000000000);