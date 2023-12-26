function formatTime(hours, minutes, seconds, is12HourFormat) {
    let formattedHours = is12HourFormat ? (hours > 12 ? hours - 12 : hours) : hours;
    const period = hours >= 12 ? 'PM' : 'AM';
  
    formattedHours = formattedHours < 10 ? `0${formattedHours}` : formattedHours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  
    return is12HourFormat
      ? `${formattedHours} : ${formattedMinutes} : ${formattedSeconds} ${period}`
      : `${formattedHours} : ${formattedMinutes} : ${formattedSeconds}`;
  }
  
  function digitalClock(is12HourFormat, targetElementId) {
    const now = new Date();
    const date = now.getDate()
    const month = now.getMonth()+1;
    const year = now.getFullYear()
    const fullDate = `${date}-${month}-${year}`
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const digitalTime = formatTime(hours, minutes, seconds, is12HourFormat);
    document.getElementById('date').textContent=fullDate
    document.getElementById(targetElementId).textContent = digitalTime;
  }
  
  setInterval(() => digitalClock(false, 'digital-clock'), 1000); 
  setInterval(() => digitalClock(true, 'digital-clockAMPM'), 1000);