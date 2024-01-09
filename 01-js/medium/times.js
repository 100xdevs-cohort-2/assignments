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
    const date = new Date();
    const time1 = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
    let sum = 1;
    for(let i = 2; i <= n; i++){
        sum += i;
    }
    const date2 = new Date();
    const time2 = date2.getHours() * 3600 + date2.getMinutes() * 60 + date2.getSeconds();
    return time2 - time1;
}
