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
    console.log('time taken -> ', (end - start)/1000);  // converting ms to s
    return sum
}

console.log('result -> ' ,calculateTime(100));
console.log('result -> ' ,calculateTime(1000));
console.log('result -> ' ,calculateTime(1000000000));

// output ->
/*time taken ->  0.00008040000032633542
result ->  5050
time taken ->  0.000027899999171495438
result ->  500500
time taken ->  1.2888584000002592
result ->  500000000067109000 */
