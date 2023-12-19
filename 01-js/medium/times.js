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
    const timeObj = new Date(); 
    const startTime = timeObj.getTime(); 
    let s=0; 
    for(let i=1;i<=n;i++)
    {
        s+=i; 
    }
    // s=n*(n+1)/2; 
    const timeObj2 = new Date(); 
    const currentTime = timeObj2.getTime(); 
    console.log((currentTime-startTime)); 
}

calculateTime(100000); 