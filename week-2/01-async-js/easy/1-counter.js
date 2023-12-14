/*
-> Create a counter in JavaScript

-> code a counter in Javascript, It should go up as time goes by in intervals of 1 second

*/
let counter = 1;
updateCounter = () => {
  console.log("Counter : " + counter);
  if (counter === 10) {
    console.log("Done");
    clearInterval(interval);
  }
  counter++;
};

const interval = setInterval(updateCounter, 300);
