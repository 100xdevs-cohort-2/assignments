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
    const startTime = new Date();
    setTimeout(function(){
        const endTime = new Date();
        const elaspedTime = (endTime-startTime)/1000  // coversion of millisecs to secs
        console.log("Time taken to calculate sum is : " +elaspedTime);
    }, 0);
    funSum(n);
    return 0.01;
}
function funSum(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}

calculateTime(1000);
