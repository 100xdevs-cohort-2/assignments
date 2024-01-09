function updateTime() {
    const now = new Date();
  
    const options24 = { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedTime24 = now.toLocaleTimeString('en-US', options24);
  
    const options12 = { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedTime12 = now.toLocaleTimeString('en-US', options12);
  
    console.clear();
    console.log(`24-Hour Format: ${formattedTime24}`);
    console.log(`12-Hour Format: ${formattedTime12}`);
  }
  
  setInterval(updateTime, 1000);