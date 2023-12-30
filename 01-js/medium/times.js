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
    let startDate = new Date();
    let sum =0;
    let start = startDate.getTime();
    let i=1;
    while(i<=n){
        sum+=i;
        i++;
    }
    let endDate = new Date();
    let endTime = endDate.getTime();
    console.log((endTime-start)/1000);
}

calculateTime(1000000000);