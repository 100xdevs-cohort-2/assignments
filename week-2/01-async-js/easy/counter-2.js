// Function to update the counter and display it
function updateCounter(counterValue) {
    // Increment the counter value
    counterValue++;
  
    // Display the updated counter value
    console.log(`Counter: ${counterValue}`);
  
    // Call the updateCounter function recursively after a delay of 1000 milliseconds (1 second)
    setTimeout(() => {
      updateCounter(counterValue);
    }, 1000);
  }
  
  // Initialize the counter value
  const initialCounterValue = 0;
  
  // Start the counter
  updateCounter(initialCounterValue);