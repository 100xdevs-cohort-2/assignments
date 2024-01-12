"use strict";

// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

// - HH:MM::SS (Eg. 13:45:23)

// - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function displayTime() {
  const curTime = new Date();
  const hour = curTime.getHours().toString().padStart(2, 0);
  const min = curTime.getMinutes().toString().padStart(2, 0);
  const sec = curTime.getSeconds().toString().padStart(2, 0);

  console.log(`${hour}:${min}:${sec}`);
}

function displayTime2() {
  let dayOrNight;

  const curTime = new Date();
  let hour = curTime.getHours();
  const min = curTime.getMinutes().toString().padStart(2, 0);
  const sec = curTime.getSeconds().toString().padStart(2, 0);

  if (hour > 12) {
    hour = (hour - 12).toString().padStart(2, 0);
    dayOrNight = "PM";
  } else {
    dayOrNight = "AM";
  }

  console.log(`${hour}:${min}:${sec} ${state}`);
}

setInterval(displayTime2, 1 * 1000);
