const counter = ()=>{
    setTimeout(()=>{
        const currentDate = new Date();
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const seconds = currentDate.getSeconds();
        if (Math.floor(minutes/10) === 0 && Math.floor(seconds/10) === 0) {
            console.log(`${hours%12}:0${minutes}:0${seconds}`);
        }
        else if(Math.floor(minutes/10) === 0 && Math.floor(seconds/10) !== 0){
            console.log(`${hours%12}:0${minutes}:${seconds}`);
        }
        else if(Math.floor(minutes/10) !== 0 && Math.floor(seconds/10) === 0){
            console.log(`${hours%12}:${minutes}:0${seconds}`);
        }
        else{
            console.log(`${hours%12}:${minutes}:${seconds}`);
        }

        counter();
    }, 1000);
};

counter();