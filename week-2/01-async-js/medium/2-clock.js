// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)
function currentMachineTime(){
    let currentHours= new Date().getHours();
    let currentMinutes= new Date().getMinutes();
    let currentSeconds= new Date().getSeconds();
    setInterval(()=>{
        let currentTime= currentHours+":"+currentMinutes+":"+(currentSeconds);
        console.log(currentTime);
        if(currentSeconds==59){
            currentSeconds=0;
            currentMinutes+=1;
        }else if (currentMinutes==59){
            currentMinutes=0;
            currentHours+=1;
        }else
        currentSeconds++;
    },1000);
    
}
currentMachineTime();