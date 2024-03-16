// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


function showTime(){
    const currentTime = new Date();

    const currentHour = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const currentseconds = currentTime.getSeconds();

    console.log(`${currentHour}:${currentMinutes}:${currentseconds}`)
}

function showTimeAmPm(){
    const currentTime = new Date();

    let Hours = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const currentseconds = currentTime.getSeconds();

    const AmOrPM = Hours >= 12 ? "PM" : "AM";
    Hours = Hours%12 || 12
    console.log(`${Hours}:${currentMinutes}:${currentseconds} ${AmOrPM}`)
}

setTimeout(()=>{
    console.clear();
    showTime();
    showTimeAmPm();
},1000);