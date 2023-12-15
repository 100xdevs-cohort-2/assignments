/*
Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)
*/

const date = new Date();
let hrs = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

// console.log(hrs + " : " + minutes + " : " + seconds);

let counter = 1;
updateTimer = () => {
  if (hrs >= 12) {
    console.log(hrs + " : " + minutes + " : " + seconds + " PM");
  } else {
    console.log(hrs + " : " + minutes + " : " + seconds + " AM");
  }
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes === 60) {
    hrs++;
    minutes = 0;
  }
};

const interval = setInterval(updateTimer, 1000);
