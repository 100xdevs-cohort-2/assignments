/*
Create a clock that shows you the current machine time.
It should update every second, and show time in the any of following formats - 
 - HH:MM:SS (Eg. 13:45:23)
 - HH:MM:SS AM/PM (Eg 01:45:23 PM)
*/

setInterval(() => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12 format.
  hours = hours % 12;
  hours = hours ? (hours < 10 ? "0" + hours : hours) : 12;

  // Add leading zeroes to single-digit minutes and seconds
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  console.log(`${hours}:${minutes}:${seconds} ${ampm}`);
}, 1000);
