/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime() {
    const start=1;
    const end1=100,end2=100000,end3=1000000000;
    let st= Date.now();
    let totalTime=0;
    Sum(start,end1);
    let res=Date.now()-st;
    totalTime+=res;
    console.log("Time taken for calculation sum using Sum from 1-100: "+res/1000+"'s");
    st=Date.now();
    Sum(start,end2);
    res=Date.now()-st;
    totalTime+=res;
    console.log("Time taken for calculation sum using Sum from 1-100000: "+res/1000+"'s");
    st=Date.now();
    Sum(start,end3);
    res=Date.now()-st;
    totalTime+=res;
    console.log("Time taken for calculation sum using Sum from 1-1000000000: "+res/1000+"'s");
    return totalTime;
}
function Sum(start,end)
{
    let sum=0;
    for(let i=start;i<=end;i++)
    {
        sum+=i;
    }
    return sum;
}
console.log("Total time :"+ calculateTime()/1000+"'s");
