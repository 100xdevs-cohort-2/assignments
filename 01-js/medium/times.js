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
    let initialDate = new Date();
    console.log(initialDate.getSeconds() + " " + initialDate.getMilliseconds());
    console.log();
    for (let i = 1; i <= n; i++) {
        if (i == n) {
            let finalDate = new Date();
            console.log(
                finalDate.getSeconds() + " " + finalDate.getMilliseconds()
            );
        }
    }
}

console.log("1 - 100");
calculateTime(100);

console.log("1 - 100000");
calculateTime(100000);

console.log("1 - 1000000000");
calculateTime(1000000000);