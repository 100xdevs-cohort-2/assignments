function updateClock() {
    // Get the current time
    const now = new Date();
  
    // Extract hours, minutes, and seconds
    var hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    let hr = 'am';
    if(hours > 12){
      hr = 'pm';
      hours = hours - 12;
    }
    // Format the time to ensure leading zeros if needed
    const formattedTime = `${hours}:${minutes}:${seconds} ${hr}`;
  
    // Display the time
    console.log(formattedTime);
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
