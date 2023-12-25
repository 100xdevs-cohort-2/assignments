/*Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)
 */

// Function to update the clock display every second
function updateClock() {
    const now = new Date();

    // Format HH:MM:SS
    const hhmmss = `${padZero(now.getHours())}:${padZero(now.getMinutes())}:${padZero(now.getSeconds())}`;
    console.log('HH:MM:SS:', hhmmss);

    // Format HH:MM:SS AM/PM
    const hhmmssAMPM = `${padZero(now.getHours() % 12 || 12)}:${padZero(now.getMinutes())}:${padZero(now.getSeconds())} ${now.getHours() < 12 ? 'AM' : 'PM'}`;
    console.log('HH:MM:SS AM/PM:', hhmmssAMPM);
}

// Function to pad a number with zero if it is less than 10
function padZero(num) {
    return num < 10 ? '0' + num : num;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update
updateClock();

