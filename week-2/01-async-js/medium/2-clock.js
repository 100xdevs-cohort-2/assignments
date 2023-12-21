// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


function getCurrentTimeFormatted() {
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    };

    const formatter = new Intl.DateTimeFormat('en-US', options);
    const formattedTime = formatter.format(new Date());

    return formattedTime;
}

function updateCurrentTime() {
    const currentTime = getCurrentTimeFormatted();
    console.log(currentTime);
}

// Update the time every second
setInterval(updateCurrentTime, 1000);
