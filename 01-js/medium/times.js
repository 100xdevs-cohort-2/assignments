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
    // logic: start the timer, at the start of the function
    // then print the time right at the end of function call 
    // line and then print out.
    let sum = 0;
    for (let i = 0; i <= n; i++){
        sum += i;
    }
    return sum;
}

// time start
var start = performance.now();
// function call 
console.log(calculateTime(10));
// time stop
var end = performance.now();
// print time taken
console.log(`Time taken is ${end - start} milliseconds`);