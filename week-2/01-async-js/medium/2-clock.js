// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)
function Time() {
  const clock = new Date();
  const hh = clock.getHours();
  const mm = clock.getMinutes();
  const ss = clock.getSeconds();
  const ampm = hh >= 12 ? "pm" : "am";
  console.log(`${hh}: ${mm}: ${ss} ${ampm}`);
}

setInterval(() => {
  Time();
}, 1000);
setTimeout(() => {
  Time();
}, 1000);
