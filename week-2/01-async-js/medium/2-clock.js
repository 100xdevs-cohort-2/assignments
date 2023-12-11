function twentyFourHourFormat(hours, minutes, seconds) {
    return String(hours).padStart(2, '0') + ":" + String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');
}

function twelveHourFormat(hours, minutes, seconds) {
    let isAM = (hours < 12);
    hours = hours%12;
    if(hours == 0)
        hours = 12;
    return twentyFourHourFormat(hours, minutes, seconds) + " " + ((isAM)?"AM":"PM");
}

setInterval(function () {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    console.log(twelveHourFormat(hours, minutes, seconds), "----", twentyFourHourFormat(hours, minutes, seconds));
}, 1000)