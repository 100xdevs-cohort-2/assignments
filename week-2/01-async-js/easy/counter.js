let seconds = 0;
let minutes = 0;
let hours = 0;

function updateSecond(){
    seconds++;
    if(seconds==60){
        seconds=0;
        updateMinute();
    }
    if(minutes==60){
        minutes=0;
        updateHour();
    }
    const formattedHours = hours.toString().padStart(3, '0');
    const formattedMinutes = minutes.toString().padStart(3, '0');
    const formattedSeconds = seconds.toString().padStart(3, '0');
    process.stdout.write(`\r${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
}

function updateMinute(){
    minutes++;
}

function updateHour(){
    hours++;
}

setInterval(updateSecond,1000);