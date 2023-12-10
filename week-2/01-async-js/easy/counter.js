let count = 0;


function incrementCounter() {
  count++;
  console.log(count);
}

// Increment the counter every second
setInterval(incrementCounter, 1000);