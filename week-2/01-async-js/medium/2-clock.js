/**
 * Using 1-counter.md or 2-counter.md from the easy section, can you create a clock that shows you the current machine time?
 * Can you make it so that it updates every second, and shows time in the following formats -
 * HH:MM::SS (Eg. 13:45:23)
 * HH:MM::SS AM/PM (Eg 01:45:23 PM)
 */


function formatWithLeadingZero(value){
    return value < 10 ? "0" + value : value;
}
// ✨✨✨ Solution 1✨✨✨
// function for getting the current time - HH:MM::SS
function getCurrentTime() {
  const now = new Date();
  const hours =  formatWithLeadingZero(now.getHours());
  const minute = formatWithLeadingZero(now.getMinutes());
  const second = formatWithLeadingZero(now.getSeconds());
  console.log(`${hours} : ${minute} : ${second}`);
}

// call the getCurrentTime function every second

setInterval(getCurrentTime, 1000);

// function for getting the current time - HH:MM::SS AM/PM
function getCurrentTimeAMPM() {
  const now = new Date();
  let hours =  formatWithLeadingZero(now.getHours());
  const minute = formatWithLeadingZero(now.getMinutes());
  const second = formatWithLeadingZero(now.getSeconds());
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = formatWithLeadingZero(hours % 12);
  console.log(`${hours} : ${minute} : ${second} ${ampm}`);
}

setInterval(getCurrentTimeAMPM, 1000);
// 🏆🏆🏆 Solution 2 🏆🏆🏆
function displayTime() {
  const now = new Date().toTimeString().slice(0, 9);
  console.log(now);
}
// setInterval(displayTime, 1000);

function displayTimeAMPM() {
  const now = new Date().toLocaleTimeString();
  console.log(now);
}
// setInterval(displayTimeAMPM, 1000);
