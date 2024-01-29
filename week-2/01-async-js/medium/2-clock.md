Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)


function waqt(){
const now=new Date();
  //we can do custom fromating 
  const hours=String(now.getHours()).padStart(2,"0");
  const minutes=String(now.getMinutes()).padStart(2,"0");
  const seconds=String(now.getSeconds()).padStart(2,"0");
  const ampm=now.getHours()>=12?"PM":"AM";

  return `${hours}:${minutes}:${seconds}  ${ampm}`

  //or we can use local time thing

  const time=now.toLocaleTimeString('en-US',{hour:"2-digit",minute:"2-digit",second:"2-digit"})
  const timeAmpm=now.toLocalTimeString()
}



setInterval(()=>{
  const currentTime=waqt();
  console.log(currentTime);
},1000);

