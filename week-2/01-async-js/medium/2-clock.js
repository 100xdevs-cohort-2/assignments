function updateClock(){
    const time = new Date();
    const hr = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();

    

    tiemString = `${padZero(hr)}:${padZero(min)}:${padZero(sec)}`;
    console.log(tiemString);

    setTimeout(updateClock, 1000);
}

function padZero(num){
    return(num < 10 ? '0' : '') + num;
}

updateClock();