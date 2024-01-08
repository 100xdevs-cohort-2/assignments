/*
Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)
*/

function formatTime(hours, minutes, seconds, use12HourFormat) {
  if (use12HourFormat) {
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")} ${ampm}`;
  } else {
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  }
}

function updateAndDisplayTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const time24Format = formatTime(hours, minutes, seconds, false);
  const time12Format = formatTime(hours, minutes, seconds, true);

  console.log(`24-Hour Format: ${time24Format}`);
  console.log(`12-Hour Format: ${time12Format}`);
}

setInterval(updateAndDisplayTime, 1000);
