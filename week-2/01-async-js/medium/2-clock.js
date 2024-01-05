// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)
let count = 1;
let apm = "PM";
let hour = 23;
let min = 41;
let sec = 0;
setInterval(()=>{
    // count++;
    console.log(`${hour}:${min}:${sec} ${apm}`);
    sec += count;
    if(sec==60){
        min++;
        if(min==60){
            hour++;
            if(hour==24&&min==60&&sec==60){
                hour = 0;
            }
            min = 0;
        }
        sec = 0;
    }
    if(hour<12){
        apm = "AM";
    }else{
        apm = "PM";
    }
}, 1000)