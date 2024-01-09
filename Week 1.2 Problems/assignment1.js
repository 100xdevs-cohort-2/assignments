function countdown(){
    let count = 50;

    const interval = setInterval(function() {
        
        console.log(count);
        count --;
        if(count<0){
            clearInterval(interval);
            console.log("Countdown Completed!");

        }
    },1000);
        
        
}

countdown();


