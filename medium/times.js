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
    let startTime = performance.now();
    calculateSum(n);
    let endTime = performance.now();
    return endTime - startTime;

}

function calculateSum(n)
{
    let sum = 0;
    for(let i=1;i<=n;i++)
    {
        sum+=i;
    }
    return sum;
}

console.log(calculateTime(1000000000));

/* 

Answers for the above problem

for 100: 0.02719999849796295
for 100000: 2.6052999943494797
for 1000000000: 965.1403000056744

*/