let timer =0 ;
function updateTimer(){
    timer++;
    console.log(timer);
    setTimeout(updateTimer,1000);
}
updateTimer()