function formatTimeComponent(component) {
  return component < 10 ? "0" + component : component;
}

function format12Hour(hours) {
  return hours % 12 || 12; // Convert 0 to 12
}

function _12hClock() {
  setInterval(() => {
    let currentDate = new Date();
    let hours24 = currentDate.getHours();
    let hours12 = format12Hour(hours24);
    let minutes = formatTimeComponent(currentDate.getMinutes());
    let seconds = formatTimeComponent(currentDate.getSeconds());

    console.log(
      `${hours12}:${minutes}:${seconds} ${hours24 < 12 ? "AM" : "PM"}`
    );
  }, 1000);
}
function _24hClock() {
  setInterval(() => {
    let currentDate = new Date();
    let hours = formatTimeComponent(currentDate.getHours());
    let minutes = formatTimeComponent(currentDate.getMinutes());
    let seconds = formatTimeComponent(currentDate.getSeconds());

    console.log(`${hours}:${minutes}:${seconds}`);
  }, 1000);
}

// _12hClock();
_24hClock();
