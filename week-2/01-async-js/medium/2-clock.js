function Time(){
    var currDate = new Date()
    if(currDate.getHours() > 12){
    var currTime = (currDate.getHours()-12) +":"+currDate.getMinutes()+":"+currDate.getSeconds()+" "+"PM"
    }else{
        var currTime = currDate.getHours +":"+currDate.getMinutes()+":"+currDate.getSeconds()+" "+"AM"
    }
    console.clear();
    
    console.log(currTime)
}

setInterval(Time,1000)
