// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

setInterval(() => {
  let date = new Date();
  let clock12HourFormat =
    date.getHours() > 12
      ? date.getHours() -
        12 +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds() +
        " PM"
      : date.getHours() +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds() +
        " AM";

  let clock24HoursFormat =
    date.getHours() + ":" + date.getHours() + ":" + date.getSeconds();
  console.log("12 hour format ->", clock12HourFormat);
  console.log("24 Hour Format ->", clock24HoursFormat);
}, 1000);
