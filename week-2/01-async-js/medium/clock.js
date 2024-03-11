function updateClock() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
  
    console.log(`Time: ${hours}:${minutes}:${seconds}`);
}

// Update the clock every second
setInterval(function() {
    updateClock();
}, 1000);
  