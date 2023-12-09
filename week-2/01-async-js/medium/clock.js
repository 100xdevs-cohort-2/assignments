// code for seconds


currDate=new Date()

currSecond=currDate.getSeconds()
currMinutes=currDate.getMinutes()
currHour=currDate.getHours()

function updateHour(){
    currHour++
    if(currHour==24){
        currHour=0
    }
}

function updateSecond(){
    currSecond++
    if(currSecond==60){
        updateMinutes()
        currSecond=0
    }
}

function updateMinutes(){
    currMinutes++
    if(currMinutes==60){
        updateHour()
        currMinutes=0
    }
}

function printTime(){
    updateSecond()
    console.log(`${currHour}:${currMinutes}:${currSecond}`)
}


setInterval(printTime,1000)