setInterval(()=>{
    const date= new Date();
    let hour= date.getHours();
    let minute= date.getMinutes();
    let second= date.getSeconds();
    let ampm= date.gethours>12?"AM":"PM"
    if(hour>12){
        hour=hour-12;
    }
    hour=(hour<10)?"0"+hour:hour;
    minute=(minute<10)?"0"+minute:minute;
    second=(second<10)?"0"+second:second;
    let time=`${hour}:${minute}:${second} ${ampm}`
    console.log(time);
},1000);