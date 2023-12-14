// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

let sec = 0;
let min = 0;
let hour = 0;
let sec1 = 0;
let min1 = 0;
let hour1 = 0;
let stat = "AM";
setInterval(function () {
  if (sec == 60) {
    if (min == 59) {
      if (hour == 23) hour = -1;
      hour += 1;
      min = -1;
    }
    min += 1;
    sec = 0;
  }
  console.log(hour + ":" + min + ":" + sec++);
  if (sec1 == 60) {
    if (min1 == 59) {
      if (hour1 == 11){
        hour1 = -1;
        if(stat = 'AM')
            stat = 'PM';
        else
            stat='AM';
      } 
      hour1 += 1;
      min1 = -1;
    }
    min1 += 1;
    sec1 = 0;
  }
  console.log(hour1 + ":" + min1 + ":" + sec1++ + " " + stat);
}, 1);
