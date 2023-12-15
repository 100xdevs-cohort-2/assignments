
function getTime(){
    const currentTime = new Date()
    console.log(`Time: ${currentTime.toLocaleString()}`);
    setTimeout(getTime, 1000);
}
getTime()