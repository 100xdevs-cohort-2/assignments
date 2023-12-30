
function clock(){
    let currentData = new Date();
    let ampm="AM";
    if(currentData.getHours>=12){
        ampm="PM";
    }

    console.log(currentData.getHours()+":"+currentData.getMinutes()+":"+currentData.getSeconds()+" "+ampm);
}


setInterval(clock,1000);