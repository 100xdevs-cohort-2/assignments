// Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap
// try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

let counter = 0;
const id = document.getElementById("counter");
const startButton = document.getElementById("startButton");
let counterInterval;

startButton.addEventListener("click", () => {
  counterInterval = setInterval(() => {
    counter++;
    id.textContent = counter;
  }, 1000);
});

let pauseButton = document.getElementById("pauseButton");
pauseButton.addEventListener("click", () => {
  clearInterval(counterInterval);
});

let resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", () => {
  clearInterval(counterInterval);
  counter = 0;
  id.textContent = counter;
});

document.addEventListener(resetButton, reset);
