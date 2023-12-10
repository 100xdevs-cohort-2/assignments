// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

function createCounter() {
    let count = 1;
    console.log('Counter:', count);
    setInterval(function () {
      count++;
      console.log('Counter:', count);
    }, 1000);
  }
  
  createCounter();
  
