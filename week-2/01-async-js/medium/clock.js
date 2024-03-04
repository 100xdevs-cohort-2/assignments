/**
Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

 */

const currentDate = new Date();
const Hours = currentDate.getHours();
const Minutes = currentDate.getMinutes();
const Seconds = currentDate.getSeconds();


setInterval(() => {
    console.log(`${Hours}:${Minutes}::${Seconds}`);
    if(Hours > 12) {
        console.log(`${Hours}:${Minutes}::${Seconds} PM`);
    } else {
        console.log(`${Hours}:${Minutes}::${Seconds} AM`);
    }
}, 1000);
