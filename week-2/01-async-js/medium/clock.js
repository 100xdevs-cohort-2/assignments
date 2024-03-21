const clock = () => {
    setInterval(() => {
        let date = new Date();

        let amPm = (date.getHours() >= 12) ? "PM" : "AM";
        let hours = (date.getHours() % 12);
        if(hours < 10){
            hours = "0" + hours;
        }
        let minutes = date.getMinutes();
        if(minutes < 10){
            minutes = "0" + minutes;
        }
        let seconds = date.getSeconds();
        if(seconds < 10){
            seconds = "0" + seconds;
        }

        console.log(`${hours}:${minutes}:${seconds} ${amPm}`);
    }, 1000);
}

clock();