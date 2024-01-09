// Using `counter1.js` or `counter2.js` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function timer() {
    // Get the current time
    const currentDate = new Date();
  
    let currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentSeconds = currentDate.getSeconds();
    // Create a formatted time string
    const meridian = currentHours >= 12 ? "PM" : "AM";
  
    currentHours = currentHours % 12 || 12;
    const formattedMinutes = currentMinutes.toString().padStart(2, "0");
    const formattedSeconds = currentSeconds.toString().padStart(2, "0");
  
    // Create a formatted time string
    const formattedTime = `${currentHours}:${formattedMinutes}:${formattedSeconds} ${meridian}`;
  
    process.stdout.write(`\r${formattedTime}`);
  }
  
  setInterval(timer, 1000);


