function startTimer(hour,min,sec) {
  

  const interval = setInterval(() => {
    hour += min / 60 >> 0;
    min += sec / 60 >> 0;
    min %= 60;
    sec %= 60;
    console.log(`Time: ${hour}:${min}:${sec}`);
    sec++;
  }, 1000);

  return {
    stop: () => clearInterval(interval)
  };
}
module.exports = startTimer;
