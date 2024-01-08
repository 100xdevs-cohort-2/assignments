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
    const start = performance.now();
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    const end = performance.now();
    console.log('time taken -> ', (end - start)/1000); 
    return sum
}

console.log('result -> ' ,calculateTime(100));
console.log('result -> ' ,calculateTime(1000));
console.log('result -> ' ,calculateTime(1000000000));


/*

time taken ->  0.00006209999322891235
result ->  5050
time taken ->  0.00003689998388290405
result ->  500500
time taken ->  2.0794114999771116
result ->  500000000067109000

*/