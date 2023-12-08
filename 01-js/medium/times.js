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
    let sum = 0;
    for(let i = 0 ; i < n ; i++)
    {
        sum += i; 
    }
    return (console.log("Total sum is:", sum)); 
}

let beforeSeconds = new Date();
const b_t = beforeSeconds.getSeconds() 

console.log("Before Summation :", b_t);

calculateTime(10000000000)

let afterSeconds = new Date();
const a_t = afterSeconds.getSeconds();
console.log("After Summation :", a_t);

console.log("Total time taken :" , a_t-b_t)