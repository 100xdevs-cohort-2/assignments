Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function updateClock() {
    const now = new Date();

    const options24Hour = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'IST' 
    };

    const options12Hour = {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'IST'
    };

    const time24Hour = now.toLocaleTimeString('en-IN', options24Hour);
    const time12Hour = now.toLocaleTimeString('en-IN', options12Hour);

    console.clear(); // Clear console for better visibility (you may remove this line if you prefer)
    console.log(`Current Time (24-hour format): ${time24Hour}`);
    console.log(`Current Time (12-hour format): ${time12Hour}`);
}

updateClock();// Initial call to start the clock


setInterval(updateClock, 1000); // Update the clock every second using setInterval