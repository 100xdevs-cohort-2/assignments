function time(){
    setInterval(()=>{
        const date=new Date();
        console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
        if(date.getHours<12){
            console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} AM`);
        }
        else{
            console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} PM`);
        }
    },1000);
}
time();