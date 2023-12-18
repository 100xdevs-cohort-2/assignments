function logTime(){
    console.clear();
    const date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    console.log(`${hr}:${min}:${sec}`);
    if(hr>=12){
        hr = hr%12;
        console.log(`${hr}:${min}:${sec} PM`);
    }
    else{
        console.log(`${hr}:${min}:${sec} AM`);
    }
}

setInterval(logTime, 1000);
