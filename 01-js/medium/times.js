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
    var beforeDate = new Date();
    var beforeTime = beforeDate.getTime();
    console.log(beforeTime);
    var sum = 0;
    for(var i=0; i<=n; i++){
        sum = sum + i;

    }
    var afterDate = new Date();
    var afterTime = afterDate.getTime();
    console.log(afterTime);
    console.log("Time required for the JS to calculate sum from 0 to " + n + " = " + ((afterTime - beforeTime)/1000))
    
}

calculateTime(1000000000)