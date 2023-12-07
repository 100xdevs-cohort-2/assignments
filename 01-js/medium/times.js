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
    let startTime=new Date()
    let i=1
    while (i<n){
        i=i+1
    }
    let endTime=new Date()
    let timePassed=endTime-startTime
    return timePassed;
}
console.log("printing the time counted in mili seconds for the number 100 : "+calculateTime(100))
console.log("printing the time counted in mili seconds for the number 1000000 : "+calculateTime(1000000))
console.log("printing the time counted in mili seconds for the number 1000000000 : "+calculateTime(1000000000))