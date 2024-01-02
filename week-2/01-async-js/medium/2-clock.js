const curTime = new Date();
let hours = curTime.getHours();
let minutes = curTime.getMinutes();
let seconds = curTime.getSeconds();

function displayTime(hours, minutes, seconds) {
    console.clear();
    console.log(`Current time: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
}

/**
 * Updates the current time every second and logs it to the console.
 *
 * @return {void} This function does not return a value.
 */
const clock = () => {
    setInterval(() => {
        seconds = seconds + 1;

        if (seconds === 60) {
            seconds = 0;
            minutes = minutes + 1;
        }
        if (minutes === 60) {
            minutes = 0;
            hours = hours + 1;
        }
        if (hours === 24) {
            hours = 0;
        }

        displayTime(hours, minutes, seconds);
    }, 1000);
}

clock();
