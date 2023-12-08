/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1 -> 100
2. Sum from 1 -> 100_000
3. Sum from 1 -> 1_000_000_000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n, callback) {
    
    let t1 = new Date();
    sumOfNumbers(n);
    let t2 = new Date();

    return `${(t2 - t1)} ms`;
}

function sumOfNumbers(n)
{
    let sum = 0;
    for(let i=1; i<=n; i++)
    {
        sum += i;
    }

    return sum;
}

const oneToHundred = calculateTime(100, sumOfNumbers);
const oneToLakh = calculateTime(10_000, sumOfNumbers);
const oneToBillion = calculateTime(1_000_000_000, sumOfNumbers);

console.log(oneToBillion);
