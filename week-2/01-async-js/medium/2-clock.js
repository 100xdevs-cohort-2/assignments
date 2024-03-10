

function printCrrTime(){
    let currDate = new Date();
    const ans = currDate.getHours() + ":" + currDate.getMinutes() + ":" + currDate.getSeconds();
    console.log(ans);
}


function printTime(){
    console.clear();
    printCrrTime();
}


setInterval(printTime, 1000);