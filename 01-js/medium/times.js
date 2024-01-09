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
    var time = new Date();
    var sum=0;
    console.log("Time Before 1-100 ", time.getTime());
    for(var i=1;i<=100;i++){
        sum+=i;
    }
    console.log("Sum 1-100 ", sum);
    sum=0;
    console.log("Time After 1-100 ", time.getTime());

    console.log("Time Before 1-100000 ", time.getTime());
    for(var i=1;i<=100000;i++){
        sum+=i;
    }
    console.log("Sum 1-100000 ", sum);
    sum=0;
    console.log("Time After 1-100000 ", time.getTime());

    console.log("Time Before 1-1000000000 ", time.getTime());
    for(var i=1;i<=1000000000;i++){
        sum+=i;
    }
    console.log("Sum 1-1000000000 ", sum);
    sum=0;
    console.log("Time After 1-1000000000 ", time.getTime());
}

calculateTime(0);