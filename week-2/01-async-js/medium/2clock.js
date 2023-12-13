function logTime(){
    let date = new Date();
    console.log(date.toTimeString());
    console.log(date.toLocaleTimeString());
}

setInterval(logTime, 1000);