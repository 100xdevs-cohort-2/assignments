function updateClock() {
    const now = new Date();
    
    // Format for 24-hour time (HH:MM:SS)
    const time24 = now.toTimeString().split(' ')[0];
    
    // Format for 12-hour time (HH:MM:SS AM/PM)
    const time12 = now.toLocaleTimeString('en-US', {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    setTimeout(updateClock, 1000);
}

updateClock();
