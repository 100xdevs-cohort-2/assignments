function showTime() {
  // Get the current time using Date object.
  const currentTime = new Date();
  // Extract the hours, minutes and seconds from current time.
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  console.log(`${hours} : ${minutes} : ${seconds}`);
}

// Function to display the current time in HH:MM:SS AM/PM format
function showTimeAMPM() {
  // Get the current time using Date object.
  const currentTime = new Date();
  // Extract the hours, minutes and seconds from current time.
  let hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  // If the hours is greater than or equal to 12, it's PM, else it's AM.
  const am_pm = hours >= 12 ? "PM" : "AM";
  // Convert hours to 12-hour format.
  hours = hours % 12 || 12;
  console.log(`${hours} : ${minutes} : ${seconds} ${am_pm}`);
}

// Using setInterval() function to update time every second.
setInterval(() => {
  console.clear();
  // HH:MM:SS format
  showTime();
  // HH:MM:SS AM/PM format
  showTimeAMPM();
}, 1000);
