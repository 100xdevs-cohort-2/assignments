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
    const startTime = Date.now()
    const calculateSum = sum(n)
    const finishTime = Date.now()
    const timeTaken = finishTime - startTime
    return {
        sum: calculateSum,
        time: timeTaken
    }
}

function sum(upperLimit){
    let sum = 0;
    for(let i = 1; i <= upperLimit; i++){
        sum += i
    }
    return sum
}




/*  
    Output: (For My Machine)

    { sum: 5050, time: 0 }  // 0 is not true it took few nonoseconds, but while calculating it shows zero miliseconds
    { sum: 5000050000, time: 2 }
    { sum: 500000000067109000, time: 1301 }

*/