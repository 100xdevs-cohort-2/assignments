function updateClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = hours >= 12 ? "pm" : "am";

  hours_12 = hours % 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  console.log(hours + ":" + minutes + ":" + seconds);
  console.log(hours_12 + ":" + minutes + ":" + seconds + " " + ampm);
}

setInterval(updateClock, 1000);
updateClock();
