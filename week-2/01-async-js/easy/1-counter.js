function counter(){
    setInterval(function(){
        let count = 0;
        count++;
        console.log(`The time has passed by one second, the current second is ${count}`)
    }, 1000);
}


counter();