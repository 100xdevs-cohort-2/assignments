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
    let perform_start = new Date();
    let addInput = 0;
    for(let i = 1;i<=n;i++)
    {
        addInput +=i;
    }
    let perform_End = new Date();
    const timeInSeconds = ((perform_start.getHours()*3600)+(perform_start.getMinutes()*60)+(perform_start.getSeconds())+perform_start.getMilliseconds());
    const end_timeInSeconds = ((perform_End.getHours()*3600)+(perform_End.getMinutes()*60)+(perform_End.getSeconds())+perform_End.getMilliseconds());
    let ans = Math.abs((timeInSeconds - end_timeInSeconds)/1000);
    return ans;
}
console.log(calculateTime(1000000000));