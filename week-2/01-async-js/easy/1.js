
function printTime(){
    date=new Date();
    curTimeString=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    console.log(curTimeString)
}
setInterval( printTime,1000)