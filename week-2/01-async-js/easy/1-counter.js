// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second
 let count = 0;

  // Function to update the counter and display it
  function updateCounter() {
    count++;
    console.log(count)
  }

  // Set interval to update the counter every second (1000 milliseconds)
  setInterval(updateCounter, 1000);