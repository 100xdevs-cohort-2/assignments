Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

let hrs = new Date().getHours()
let mins = new Date().getMinutes()
let secs = new Date().getSeconds()

setInterval(()=>{

    if(hrs == 23 && mins == 59 && secs == 59){
        hrs = 0;
        mins = 0
        secs = 0
    }else if(hrs != 12 && mins == 59 && secs == 59){
        hrs++
        mins = 0
        secs = 0
    }
    else if(hrs != 12 && mins != 59 && secs == 59){
        mins++
        secs = 0
    }else{
        secs++
    }
    console.log(`${hrs}:${mins}:${secs}`)
},1000)
