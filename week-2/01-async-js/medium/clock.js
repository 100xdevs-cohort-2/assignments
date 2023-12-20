function formatTime(hours, minutes, seconds) {
    // Pad single-digit values with a leading zero
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    return `${hours}:${minutes}:${seconds}`;
  }
  
  function formatTimeWithAMPM(hours, minutes, seconds) {
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Convert 0 to 12 for 12-hour format
    return `${formatTime(hours, minutes, seconds)} ${ampm}`;
  }
  
  let cnt = 0;
  
  setInterval(function () {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const formattedTime = formatTime(hours, minutes, seconds);
    const formattedTimeWithAMPM = formatTimeWithAMPM(hours, minutes, seconds);
  
    // console.log(`Counter: ${cnt}`);
    console.log(`Format 1: ${formattedTime}`);
    console.log(`Format 2: ${formattedTimeWithAMPM}`);
  
    cnt += 1;
  }, 1000);
  