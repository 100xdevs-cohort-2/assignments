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
    for(let t = 1; t <= n; t++) {
        sum += t;
    }
    let end = new Date();
    return (end - start);
}

times = [100, 100000, 1000000000];
times.forEach(element => {
    console.log("Time taken to run " + String(element) + " iterations :", calculateTime(element), "ms")
});