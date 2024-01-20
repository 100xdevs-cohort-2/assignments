function pad(n) {
    return (n < 10) ? ("0" + n) : n;
}

date = new Date()

h = parseInt(date.getHours())
m = parseInt(date.getMinutes())
s = parseInt(date.getSeconds())

setInterval(function(){
    console.log(pad(h),":",pad(m),":",pad(s))
    if(h < 12){
        console.log(pad(h),":",pad(m),":",pad(s), "AM")
    }
    else{
        console.log(pad(h-12),":",pad(m),":",pad(s), "PM")
    }
    console.log("-------------------------------------------------")
    if(s >= 59){
        s = 0;
        m = m + 1;
    }
    if(m >= 59){
        m = 0;
        h = h + 1;
    }
    s = s + 1
}, 1000)