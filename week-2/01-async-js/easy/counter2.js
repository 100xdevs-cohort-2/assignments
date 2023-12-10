let count = 0;

function updateCounter() {
    console.log(`Counter: ${count}`);
}

function incrementCounter() {
    count++;
    updateCounter();
    
  // Call incrementCounter again after 1000 milliseconds
    setTimeout(incrementCounter, 1000);
}

// Start the counter
incrementCounter();
