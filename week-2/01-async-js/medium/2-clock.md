Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)


function updateClock() {
  const now = new Date();

  // Format: HH:MM:SS
  const timeHHMMSS = `${padZero(now.getHours())}:${padZero(now.getMinutes())}:${padZero(now.getSeconds())}`;

  // Format: HH:MM:SS AM/PM
  const timeHHMMSSAMPM = `${padZero12HourFormat(now.getHours())}:${padZero(now.getMinutes())}:${padZero(now.getSeconds())} ${getAMPM(now)}`;

  console.clear();
  console.log(`24-Hour Format: ${timeHHMMSS}`);
  console.log(`12-Hour Format: ${timeHHMMSSAMPM}`);
}

function padZero(num) {
  return num.toString().padStart(2, '0');
}

function padZero12HourFormat(num) {
  const twelveHourFormat = num % 12 || 12; // Convert 0 to 12
  return padZero(twelveHourFormat);
}

function getAMPM(date) {
  return date.getHours() >= 12 ? 'PM' : 'AM';
}

setInterval(updateClock, 1000);
updateClock(); // Initial update
