function printTime(){
    date=new Date();
    curTimeString=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    console.log(curTimeString)
}
function setInterval(callback,duration){
    setTimeout(()=>{
        callback();
        setInterval(callback,duration);
    },duration)

}
setInterval(printTime,1000);