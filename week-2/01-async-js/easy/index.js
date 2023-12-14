let hrs = new Date().getHours()
let mins = new Date().getMinutes()
let secs = new Date().getSeconds()

setInterval(()=>{

    if(hrs == 23 && mins == 59 && secs == 59){
        hrs = 0;
        mins = 0
        secs = 0
    }else if(hrs != 12 && mins == 59 && secs == 59){
        hrs++
        mins = 0
        secs = 0
    }
    else if(hrs != 12 && mins != 59 && secs == 59){
        mins++
        secs = 0
    }else{
        secs++
    }
    console.log(`${hrs}:${mins}:${secs}`)
},1000)

