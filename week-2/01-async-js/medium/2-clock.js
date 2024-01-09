// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

let count = 1;

setInterval(() => {
  console.clear();
  let date = new Date();

  let val = "";
  let hours = date.getHours();
  if (hours >= 12) {
    val = "PM";
    hours = hours % 12 || 12;
  } else {
    val = "AM";
  }
  let time =
    hours.toString().padStart(2, 0) +
    ":" +
    date.getMinutes().toString().padStart(2, 0) +
    ":" +
    date.getSeconds().toString().padStart(2, 0) +
    " " +
    val;
  console.log(time);
  count++;
}, 1000);
