function updateClock() {
  const now = new Date();

  // Format time in HH:MM:SS
  const time24 = now.toLocaleTimeString("en-US", { hour12: false });

  // Format time in HH:MM:SS AM/PM
  const time12 = now.toLocaleTimeString("en-US", { hour12: true });

  // Display the time
  console.log(`${time12} && ${time24}`);
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update
updateClock();
