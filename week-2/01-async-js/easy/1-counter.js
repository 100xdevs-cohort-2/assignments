// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

// Initialize the counter to start from 0.
let count = 0;

// Set up an interval to increment the counter every second. In each second, print its value and then increment.
setInterval(function () {
    console.log("Current Value:", count);
    count++;
}, 1000);
