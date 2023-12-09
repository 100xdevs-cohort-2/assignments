// Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 secondz

let count = 0;

// counter function to start counting on specified interval, if required, by default the interval is 1000ms
function startCounter(interval = 1000) {
  setInterval(function () {
    console.log("Count:", count++);
  }, interval);
}

// function calling
startCounter(2000);
