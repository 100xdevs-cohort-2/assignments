// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)





setInterval(() => {
    const date = new Date()
const hour = date.getHours()
const min = date.getMinutes()
const sec = date.getSeconds()
    
    let current = `${hour} :${min} : ${sec}` ;


     if(hour>=12){
        console.log(current, "PM");
     } else{
        console.log(current, "AM");
     }

},1000);

