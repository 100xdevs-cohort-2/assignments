function clock(){
    setInterval(()=>{
        const date = new Date();
        // console.log(`${date.toLocaleTimeString('en-us')}`)
        console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
    },1000);
};

clock();