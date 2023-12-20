/* Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM) */

 let hr = 0;
 let min = 0;
 let sec = 0;
 let time = "am";

 setInterval(function() {
     sec++;
     if (sec == 60) {
         sec = 0;
         min++;
     }
     if (min == 60) {
         min = 0;
         hr++;
     }
     if (hr == 24) {
         hr = 0;
     }
     if (hr < 12) {
        time = "am";
    }
    if(hr >= 12) {
        time = "pm";
    }
   console.log(`${hr.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')} ${time}`);
    }, 1000);