
setInterval(()=>{
    let Time=new Date();
    let Hours =Time.getHours();
    let Mintues = Time.getMinutes();
    let Seconds = Time.getSeconds();

    console.log(Hours,":",Mintues,":",Seconds);
},1000)