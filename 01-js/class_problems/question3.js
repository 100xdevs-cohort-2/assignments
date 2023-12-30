// Create a terminal clock (HH:MM:SS)

function displayClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  process.stdout.write(`\r${hours}:${minutes}:${seconds}`);
}

setInterval(displayClock, 1000);

displayClock();
