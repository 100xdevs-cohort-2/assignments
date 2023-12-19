setInterval(() => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let period = "AM";

  if (hours >= 12) {
    period = "PM";
    hours = hours % 12 || 12;
  }

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  process.stdout.write(`\r${hours}:${minutes}:${seconds} ${period}`);
}, 1000);

