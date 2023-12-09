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
    const start = new Date();
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += 1;
    };
    const end = new Date();
    return end - start;
};
// time complexity - O(n)
// space complexity - O(1)

// function calculateTime(n){
//     const start = new Date();
//     const sum = n/2*(2 + (n - 1));
//     const end = new Date();
//     return end - start;
// };
// // time complexity - O(1)
// // space complexity - O(1)
