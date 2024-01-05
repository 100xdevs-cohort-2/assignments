function logTime(){
    console.clear()
    const date = new Date()
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}

setInterval(logTime, 1000);
