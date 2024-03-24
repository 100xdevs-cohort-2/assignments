/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

const getTimeDiff = (t1, t2) => {
    return Math.ceil((t2 - t1)/1000);
};

function calculateTime(n) {
    let sum = 0;
    let timeStamp1 = Date.now();
    for(let i=1; i<=n; i++){
        sum += i;
    }
    let timeStamp2 = Date.now();
    const timeDiff = getTimeDiff(timeStamp1, timeStamp2);
    console.log(`Time taken for Sum of 1-${n} :`, timeDiff);
    
    return timeDiff;
}

calculateTime(100);
calculateTime(100000);
calculateTime(1000000000);