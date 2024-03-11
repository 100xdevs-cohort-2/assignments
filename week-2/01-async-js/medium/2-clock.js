function timer(){
    date = new Date()

    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    if (hours<=9){
        hours =  "0"+ hours.toString()
    }
    if (minutes<=9){
        minutes =  "0"+ minutes.toString()
    }
    if (seconds<=9){
        seconds =  "0"+ seconds.toString()
    }
    console.log(hours+ ":" + minutes + ":" + seconds)
}

function timerAmPm(){
    date = new Date()

    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    const meridian = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const timeString = `${formattedHours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${meridian}`;
    console.log(timeString)
}

setInterval(timerAmPm, 1000)
