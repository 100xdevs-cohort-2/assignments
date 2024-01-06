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
    let startTime = (new Date()).getTime();
    let ans = 0;
    for(let i=1;i<=n;i++){
        ans+=i;
    }
    let endTime = (new Date()).getTime();
    return (endTime-startTime)/1000;
}

console.log(`Sum till 1: ${calculateTime(1)} sec`);
console.log(`Sum till 10: ${calculateTime(10)} sec`);
console.log(`Sum till 100: ${calculateTime(100)} sec`);
console.log(`Sum till 1000: ${calculateTime(1000)} sec`);
console.log(`Sum till 10000: ${calculateTime(10000)} sec`);
console.log(`Sum till 100000: ${calculateTime(100000)} sec`);
console.log(`Sum till 1000000: ${calculateTime(1000000)} sec`);
console.log(`Sum till 10000000: ${calculateTime(10000000)} sec`);
console.log(`Sum till 100000000: ${calculateTime(100000000)} sec`);
console.log(`Sum till 1000000000: ${calculateTime(1000000000)} sec`);
console.log(`Sum till 10000000000: ${calculateTime(10000000000)} sec`);
console.log(`Sum till 20000000000: ${calculateTime(20000000000)} sec`);
console.log(`Sum till 100000000000: ${calculateTime(100000000000)} sec`);


// Sum till 1: 0 sec
// Sum till 10: 0 sec
// Sum till 100: 0 sec
// Sum till 1000: 0 sec
// Sum till 10000: 0.001 sec
// Sum till 100000: 0.002 sec
// Sum till 1000000: 0.003 sec
// Sum till 10000000: 0.011 sec
// Sum till 100000000: 0.103 sec
// Sum till 1000000000: 1.007 sec
// Sum till 10000000000: 10.941 sec
// Sum till 20000000000: 22.652 sec
// Sum till 100000000000: 112.237 sec