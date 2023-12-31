let now = new Date();

setInterval(() => {
  now = new Date();
  let hours = now.getHours();
  let am = "";
  if (hours > 12) {
    hours = hours - 12;
    am = "PM";
  } else {
    am = "AM";
  }
  hours = hours.toString().padStart(2, "0");
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  console.log(hours + ":" + minutes + "::" + seconds + " " + am);
}, 1000);
