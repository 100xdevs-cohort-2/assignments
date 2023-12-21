function formatTimeWithAMPM(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${hours}:${minutes}:${seconds} ${ampm}`;
}

function updateTime() {
  let t = new Date();
  let formattedTime1 = `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`;
  let formattedTime2 = formatTimeWithAMPM(t);
  console.log(`Format 1: ${formattedTime1}`);
  console.log(`Format 2: ${formattedTime2}`);
}

setInterval(updateTime, 1000);
