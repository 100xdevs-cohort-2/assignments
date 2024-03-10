//TODO: Change time every 1sec

const digitalClock = (is12HRFormat) => {
  const date = new Date();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  let time;
  if (is12HRFormat) {
    let meridiem = hours < 12 ? "AM" : "PM";
    let formattedHour = hours <= 12 ? hours : hours - 12;
    console.log(`${formattedHour} : ${minutes} : ${seconds} ${meridiem}`);
  } else {
    console.log(`${hours} : ${minutes} : ${seconds}`);
  }
};

setInterval(() => {
  digitalClock(true);
}, 1000);
setInterval(() => {
  digitalClock(false);
}, 1000);
