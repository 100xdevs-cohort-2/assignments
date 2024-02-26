function startTimer(hour, min, sec) {
    let timeoutId;
  
    function timerLogic() {
      min += sec / 60 >> 0;
      hour += min / 60 >> 0;
      min %= 60;
      sec %= 60;
  
      let ampm = (hour >= 12 && hour < 24) ? 'pm' : 'am';
      hour = (hour >= 13 && hour <= 23) ? hour - 12 : hour;
      hour = (hour === 0 || hour === 24) ? 12 : hour; // Set 00 to 12 for AM
  
      console.log(`Time: ${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')} ${ampm}`);
      sec++;
  
      if (hour === 12 && min === 0 && sec === 0) {
        // Reset the time to 00:00:01 AM after reaching 12:00:00 PM
        hour = 0;
      }
  
      timeoutId = setTimeout(timerLogic, 1000);
    }
  
    timerLogic();
  
    return {
      stop: () => clearTimeout(timeoutId)
    };
  }
  
  // Example usage:
  const timer = startTimer(23, 59, 55);
  // Example usage:
  module.exports = startTimer;