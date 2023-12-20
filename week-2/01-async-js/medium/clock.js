function updateTime() {
  const now = new Date();

  const time1 = now.toLocaleTimeString("en-US", { hour12: false });

  const time2 = now.toLocaleTimeString("en-US", { hour12: true });

  console.log(`${time2} && ${time1}`);
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update
updateTime();
