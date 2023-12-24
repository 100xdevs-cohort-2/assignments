let x = setInterval(()=>{
    var d = new Date(); // for now
    datetext = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();

    if(d.getHours() < 12){
        datetext += " AM";
    }
    else    
        datetext += " PM";
    console.log(datetext);
}, 1000)

console.log(x);
