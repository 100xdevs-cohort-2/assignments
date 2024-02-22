// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

// -> how to make it update at same place 

function ampm_counter(){
    let date = new Date();
    let hrs = date.getHours();
    let ampm = 'AM';
    if(hrs > 12){
        hrs = hrs-12;
        ampm='PM';
    }
    console.log(`Time is - ${hrs}:${date.getMinutes()}:${date.getSeconds()} ${ampm}\r`);
}

setInterval(ampm_counter,1000);