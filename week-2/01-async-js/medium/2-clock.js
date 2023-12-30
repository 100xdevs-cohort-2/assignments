
let date = new Date()
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

function printTimer(){
    console.clear();
    let amorpm = "AM";
    let hoursNew = hours % 12;
    if(hoursNew == 0){
        hoursNew = 12
    }
    if(hours >= 12){
        amorpm = "PM";
    }

    let timeStrNew = hoursNew.toString() + ":" + minutes.toString() + ":" + seconds.toString() + " " + amorpm;
    let timerStr = hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();
    console.log(timerStr);
    console.log(timeStrNew);
    seconds += 1;
    if(seconds == 60){
        seconds = 0;
        minutes +=1;
    }
    if(minutes == 60){
        minutes = 0;
        hours += 1;
    }
    if(hours == 24){
        hours = 0;
    }
}

setInterval(printTimer,1000);