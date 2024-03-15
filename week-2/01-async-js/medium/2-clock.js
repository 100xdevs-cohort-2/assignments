// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


function clock() {
    setInterval(() => {
      // get current hour, min, sec
      let hour = String(new Date().getHours());
      let min = String(new Date().getMinutes());
      let sec = String(new Date().getSeconds());
      if (sec.length < 2) sec = "0" + sec;
      if (min.length < 2) min = "0" + min;
      if (hour.length < 2) hour = "0" + hour;
      console.clear();
      console.log(hour + ":" + min + ":" + sec);
    }, 1000);
  }
  
  clock();