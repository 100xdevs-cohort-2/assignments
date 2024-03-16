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
    let abc= new Date()
    let startMinute = abc.getMinutes()*60;
    let startSeconds = abc.getSeconds();
    let startTime = startMinute+startSeconds;
    //console.log(startTime);
    let sum=0;
    for (let i=1; i<n; i++){
        sum += sum;
    }
    let efg = new Date();
    let endMinute = efg.getMinutes()*60;
    let endSeconds = efg.getSeconds();
    let endTime = endMinute+endSeconds;
    //console.log(endTime);

    let result= endTime - startTime;
    return result;
}

console.log(calculateTime(10000000000));
