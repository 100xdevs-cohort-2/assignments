// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

let counter = 0;

const intervalId = setInterval(() => {
 console.log(counter);
 counter++;
}, 1000); // 1000 milliseconds = 1 second

// To stop the counter after a certain condition, you can use clearInterval.
// For example, to stop the counter after 10 seconds:
setTimeout(() => {
 clearInterval(intervalId);
}, 10000); // 10000 milliseconds = 10 seconds
