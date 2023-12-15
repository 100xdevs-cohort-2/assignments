setInterval(() => {
    const currentTime = new Date()
     console.log(`HH:MM::SS: ${currentTime.toTimeString()}` );
     console.log(`HH:MM::SS AM/PM: ${currentTime.toLocaleTimeString()}` );
 }, 1000);