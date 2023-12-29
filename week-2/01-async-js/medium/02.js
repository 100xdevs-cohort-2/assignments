// clock.js

function updateClock() {
    const now = new Date();

    // Format: HH:MM::SS
    const formattedTime = `${padZero(now.getHours())}:${padZero(now.getMinutes())}:${padZero(now.getSeconds())}`;

    // Format: HH:MM::SS AM/PM
    const formattedTimeWithAmPm = `${padZero(now.getHours() % 12 || 12)}:${padZero(now.getMinutes())}:${padZero(now.getSeconds())} ${now.getHours() >= 12 ? 'PM' : 'AM'}`;

    console.log(`Formatted Time (HH:MM::SS): ${formattedTime}`);
    console.log(`Formatted Time (HH:MM::SS AM/PM): ${formattedTimeWithAmPm}`);
}

function padZero(value) {
    return value < 10 ? `0${value}` : value;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update
updateClock();
