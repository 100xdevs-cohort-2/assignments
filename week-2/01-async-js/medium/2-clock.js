// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)



function showMyClock(){
    const now =  new Date();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let hour = now.getHours();
    setInterval(() => {
        console.log(hour,":",minute,":", second);
        if(second == 60){
            second = 0;
            if(minute == 60){
                minute = 0;
                if(hour == 24){
                    hour = 0;
                }else{
                    hour++;
                }
            }else{
                minute++;
            }
        }else{
            second++;
        }
    },1000)
}

showMyClock();