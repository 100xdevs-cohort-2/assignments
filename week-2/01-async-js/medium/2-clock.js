function clock(){
    setInterval(()=>{
        const currentTime = new Date();
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const seconds = currentTime.getSeconds();

        console.log(`Current time: ${hours}:${minutes}:${seconds}`);
    },1000)
}

clock();