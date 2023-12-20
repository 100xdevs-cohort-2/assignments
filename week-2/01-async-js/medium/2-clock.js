const curTime = new Date();
let hours = curTime.getHours();
let minutes = curTime.getMinutes();
let seconds = curTime.getSeconds();

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

        console.clear();
        console.log(`Current time: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    }, 1000);
}

clock();
