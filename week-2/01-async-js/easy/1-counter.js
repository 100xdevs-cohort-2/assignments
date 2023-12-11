let a = 1;
let maxCount = 5
setInterval(function(){
    console.log("Count: ", a)
    if(a == maxCount){
        clearInterval(this) //Not sure if this is the correct way to stop the setInteval 
    }
    a = a + 1;
}, 1000)