function digitalClock() {
  const currentTime = new Date();
  let hours = currentTime.getHours();
  const minutes = String(currentTime.getMinutes()).padStart(2, "0");
  const seconds = String(currentTime.getSeconds()).padStart(2, "0");

  let tF = "AM";
  if (hours >= 12) {
    tF = "PM";

    if (hours === 0) {
      hours = 12;
    }

    const time = `${hours}:${minutes}:${seconds} ${tF}`;
    console.clear();
    console.log(time);
  }
}

setInterval(digitalClock, 1000);
