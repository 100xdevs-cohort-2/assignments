const timer=()=>{
    const i=true
    

        function updateTimer() {
            const date = new Date;
            console.clear();
            console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
          
            setTimeout(function () {
             
              updateTimer();
            }, 1000); // 1000 milliseconds = 1 second
          }
        
          updateTimer();
    
}

timer();