function displayClock() {
  const now = new Date();
  const hours24 = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const hours12 = (hours24 % 12 || 12).toString().padStart(2, "0");
  const ampm = hours24 >= 12 ? "PM" : "AM";

  process.stdout.write(
    `\r${hours24}:${minutes}:${seconds}   ${hours12}:${minutes}:${seconds} ${ampm}`
  );
}

setInterval(displayClock, 1000);

// Display the current time immediately
displayClock();
