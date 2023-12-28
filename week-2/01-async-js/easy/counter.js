let hour=0,min=0,sec=0;
setInterval(()=>{
  hour+=(min/60>>0)    ;
  min+=(sec/60>>0);
  min%=60;
  sec%=60;
  console.log(`Time: ${hour}:${min}:${sec}`);
  sec++;
  
},1000)