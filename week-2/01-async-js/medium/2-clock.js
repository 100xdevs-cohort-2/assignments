let count = 0;

setInterval(() => {
  const currTime = new Date();

  const time24 =
    String(currTime.getHours()).padStart(2, "0") +
    ":" +
    String(currTime.getMinutes()).padStart(2, "0") +
    ":" +
    String(currTime.getSeconds()).padStart(2, "0");

  console.log(time24);

  const rawtime12 = currTime.getHours() % 12 || 12;
  const AMPM = currTime.getHours() < 12 ? "AM" : "PM";

  const time12 =
    String(rawtime12).padStart(2, "0") +
    ":" +
    String(currTime.getMinutes()).padStart(2, "0") +
    ":" +
    String(currTime.getSeconds()).padStart(2, "0") +
    AMPM;
  console.log(time12);
}, 1000);
