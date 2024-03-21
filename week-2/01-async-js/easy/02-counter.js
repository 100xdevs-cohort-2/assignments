const counterWithoutSetInterval = (time, delay) => {
    console.log(time);
    setTimeout(()=> {
        counterWithoutSetInterval(time+1, delay);
    }, delay);
}

counterWithoutSetInterval(1, 1000);