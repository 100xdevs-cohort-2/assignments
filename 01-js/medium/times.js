/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

// function calculateTime(n) {
//     let sum = 0;
//     let currentTime = new Date();
//     let startedOn = currentTime.getHours() + "" + currentTime.getMinutes() + "" + currentTime.getSeconds() + "" + currentTime.getMilliseconds();
//     for(i=0;i<=n;i++){
//         sum = sum + i;
//     }
//     let newTime = new Date();
//     let completedBy = newTime.getHours() + "" + newTime.getMinutes() + "" + newTime.getSeconds() + "" + currentTime.getMilliseconds();
//     let adm = Number(startedOn);
//     let adm2 = Number(completedBy);
//     let timeTaken = adm2 - adm
//     console.log("Sum is: " +sum);
//     console.log("Time taken: " +timeTaken);
//     // return 0.01;
// }


function calculateTime(n) {
    let sum = 0;
    let startTime = new Date().getTime();
    for(let i = 1; i <= n; i++){
        sum += i;
    }
    let endTime = new Date().getTime();
    let timeTaken = endTime - startTime;
    console.log(`Sum is: ${sum}`);
    console.log(`Time taken: ${timeTaken / 1000} seconds`);
    return timeTaken / 1000;
}

console.log(calculateTime(50000000));