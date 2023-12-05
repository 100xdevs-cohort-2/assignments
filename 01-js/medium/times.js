/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

// My approach
// I later got to know that you can also subtract new Date() objects creted one after another (https://github.com/NKJ14/Assigments/blob/main/01-js/medium/times.js)

function calculateTime(n) {
    const beforeTime = new Date()
    const beforeTimeinS = beforeTime.getMinutes()*60 
                        + beforeTime.getSeconds() 
                        + (beforeTime.getMilliseconds() / 1000)
    sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i;
    }
    const afterTime = new Date()
    const afterTimeinS = afterTime.getMinutes()*60 
                        + afterTime.getSeconds() 
                        + (afterTime.getMilliseconds() / 1000)
    
    const calcTime = afterTimeinS - beforeTimeinS

    return [calcTime, afterTimeinS, beforeTimeinS];
}

console.log(calculateTime(1000000000))