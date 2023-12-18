function updateClock() {
    const now = new Date();
  
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    const formattedTime24 = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  
    const formattedTime12 = `${padZero(hours % 12 || 12)}:${padZero(minutes)}:${padZero(seconds)} ${ampm}`;
  
    console.log(`24-Hour Format: ${formattedTime24}`);
    console.log(`12-Hour Format: ${formattedTime12}`);
  }
  
  function padZero(num) {
    return num < 10 ? `0${num}` : num;
  }
  
  setInterval(updateClock, 1000);
  
  updateClock();
  