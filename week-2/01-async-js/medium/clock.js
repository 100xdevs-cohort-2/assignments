// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)
const timeFormat1 = (time) => {
  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};

const timeFormat2 = (time) => {
  const hours = String(time.getHours() % 12 || 12).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');
  const amPm = time.getHours() < 12 ? 'AM' : 'PM';
  return `${hours}:${minutes}:${seconds} ${amPm}`;
};

const counter = () => {
  let date = new Date();
  const incrementTime = setInterval(() => {
    date.setSeconds(date.getSeconds() + 1);
  }, 1000);
  const showTime = setInterval(() => {
    let currentTime = date.getTime();
    console.log(timeFormat1(new Date(currentTime)));
    console.log(timeFormat2(new Date(currentTime)));
  }, 1000);
  return {
    displayTime: () => null,
    stop: () => {
      clearInterval(incrementTime);
      clearInterval(showTime);
    },
  };
};
const myCounter = counter();
setInterval(() => myCounter.displayTime(), 1000);
