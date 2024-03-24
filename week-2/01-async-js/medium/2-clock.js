/*
Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)
*/

function formatTime(time){
    const hours = time.getHours().toString().padStart(2, 0);
    const minutes = time.getMinutes().toString().padStart(2, 0);
    const seconds = time.getSeconds().toString().padStart(2, 0);

    return `${hours}:${minutes}:${seconds}`;
}

function formatTimeAMPM(time){
    const hours = time.getHours() % 12 || 12;
    const minutes = time.getMinutes().toString().padStart(2, 0);
    const seconds = time.getSeconds().toString().padStart(2, 0);
    const ampm = time.getHours() < 12 ? 'AM' : 'PM';
    return `${hours}:${minutes}:${seconds} ${ampm}`;
}  

function startClock() {
    const intervalId = setInterval(() => {
    const currentTime = new Date();
    
    // Display time in HH:MM:SS format
    console.log(`Time (HH:MM:SS): ${formatTime(currentTime)}`);

    // Display time in HH:MM:SS AM/PM format
    console.log(`Time (HH:MM:SS AM/PM): ${formatTimeAMPM(currentTime)}`);
  }, 1000);
}

// Start the clock
startClock();