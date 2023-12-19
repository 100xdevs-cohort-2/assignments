function updateClock() {
    let now = new Date();
    let timeFormat24 = now.toLocaleTimeString('en-US', { hour12: false });
    let timeFormat12 = now.toLocaleTimeString('en-US', { hour12: true });
    console.log('Current Time (24-hour format): ' + timeFormat24);
    console.log('Current Time (12-hour format): ' + timeFormat12);
  }
  
setInterval(updateClock, 1000);
  