// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

// get current time

function getTime() {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    let normal_time = `${hours}:${minutes}:${seconds}`;
    if (hours > 12) {
        hours = hours - 12;
        am_pm_time = `${hours}:${minutes}:${seconds} PM`;
    }
    else {
        am_pm_time = `${hours}:${minutes}:${seconds} AM`;

    }
    return `${normal_time} ${am_pm_time}`;
}


// update time every second

function counter() {
    setInterval(function () {
        console.log(getTime());
    }, 1000);
}

counter();