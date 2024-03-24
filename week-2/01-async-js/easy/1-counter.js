/*
## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second
*/

function startCounter() {
  let count = 0;

  const intervalId = setInterval(() => {
    console.log(`Count: ${count}`);
    count++;

    // Uncomment the following line if you want to stop the counter after a certain number of iterations (e.g., 10)
    // if (count === 10) clearInterval(intervalId);
  }, 1000);
}

// Start the counter
startCounter();