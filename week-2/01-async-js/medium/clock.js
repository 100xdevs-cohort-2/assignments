 function Clock(){
  const date = new Date();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const meridian = hour>12 ? "PM":"AM"

  console.log(
    `${convertTo(hour)} : ${convertTo(minute)} : ${convertTo(second)} ${meridian}`
  )
  
}

function convertTo(x){
  if(x>10) return x;
  else return `0${x}`;
}

setInterval(Clock,1000);