// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function calculateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    console.log(`Current Time: ${hours}:${minutes}:${seconds}`);

    let amOrPm = hours % 12 ===0 ? "AM":"PM"
    console.log(`${Math.floor(hours%12)}:${minutes}:${seconds}${amOrPm}`);
}

setInterval(calculateTime, 1000);




