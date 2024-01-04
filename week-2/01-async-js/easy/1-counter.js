// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

// Initialize the counter to start from 0.
let counter = 0;

// increment counter every second
setInterval(function () {
  console.log("Current Value:", counter);
  counter++;
}, 1000);