// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

let counter =0;
 function updateTime(loopCount){
 let time = setInterval(function()
  {
    counter++;
    let date = new Date();
    let format = { hour: 'numeric', minute: '2-digit',second: '2-digit', hour12: true };
    let currentTime = date.toLocaleString('en-IN', format);
    console.log("Counter -"+ counter +" <-> HH:MM::SS AM/PM -"+ currentTime);
    if(loopCount == counter)
    {
      clearInterval(time);
    }
  },1000);
 }

 const callFn = updateTime(10);
