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
    let start = Date.now();
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    let end = Date.now();
    let time = (end - start)/1000; //it is divided by 1000 so that it could be converted from milliseconds to seconds
    console.log(time);
    return time;
}

calculateTime(100)
calculateTime(100000)
calculateTime(1000000000)
