/*Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)
 

 */
setInterval(() => {
  let d = new Date();
  let hour = d.getHours();
  let mins = d.getMinutes();
  let sec = d.getSeconds();
  let ampm = hour >= 12 ? "PM" : "AM";
  hour = hour < 12 ? "0" + hour : hour;
  mins = mins < 10 ? "0" + mins : mins;
  console.log(`${hour}:${mins}:${sec}`);
  hour = hour % 12;
  console.log(`${hour}:${mins}:${sec} ${ampm}`);
}, 1000);
