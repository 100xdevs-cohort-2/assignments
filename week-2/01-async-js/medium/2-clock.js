// <!-- Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM) -->


function updateFormattedTime() {
    let time = new Date();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let second = time.getSeconds();

    let amOrPm = hour >= 12 ? 'PM' : 'AM';

    // Convert 24-hour format to 12-hour format
    hour = hour % 12 || 12;

    let formattedTime = `${hour}:${minutes}:${second} ${amOrPm}`;

    console.log(formattedTime);
}

// Call the function immediately to log the initial time
updateFormattedTime();

// Set up an interval to update the time every second
setInterval(updateFormattedTime, 1000);

