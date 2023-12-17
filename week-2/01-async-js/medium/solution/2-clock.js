setInterval(() => {
  //   formatTimeHHMMSS();
  formatTimeHHMMSSAMPM();
}, 1000);

function formatTimeHHMMSS() {
  let currTime = new Date();

  let hours = String(currTime.getHours()).padStart(2, "0");
  let minutes = String(currTime.getMinutes()).padStart(2, "0");
  let seconds = String(currTime.getSeconds()).padStart(2, "0");

  console.log(`${hours}:${minutes}:${seconds}`);
}

function formatTimeHHMMSSAMPM() {
  let currTime = new Date();

  let hours = currTime.getHours();
  let ampm = hours >= 12 ? "PM" : "AM";

  hours = String(hours % 12 == 0 ? 12 : hours % 12).padStart(2, "0");
  let minutes = String(currTime.getMinutes()).padStart(2, "0");
  let seconds = String(currTime.getSeconds()).padStart(2, "0");

  console.log(`${hours}:${minutes}:${seconds} ${ampm}`);
}
