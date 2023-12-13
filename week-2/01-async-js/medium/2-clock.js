/* 

Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

*/

setInterval(() => {
  console.log(new Date().toTimeString().slice(0, 8));
}, 1000);

let count = 0;

function counter(value) {
  function next() {
    console.log(new Date().toLocaleTimeString().toUpperCase());
    setTimeout(next, 1000);
  }
  next();
}
counter(5);
