function getCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  const time24Format = `${hours}:${minutes}:${seconds}`;
  const time12Format = `${hours % 12 || 12}:${minutes}:${seconds} ${ampm}`;

  console.clear(); // Clear console for updated time display
  console.log(`HH:MM:SS   => ${time24Format}`);
  console.log(`HH:MM:SS AM/PM => ${time12Format}`);
}

// Display current time and update every second
setInterval(getCurrentTime, 1000);
