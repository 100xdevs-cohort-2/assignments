// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

const {customSetInterval2 : clock2 }=require('../easy/2')

function clock1(callback,duration){
    setInterval(callback,duration);
}


function print24(){
    const date=new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}
function print12(){
    const date=new Date();
    console.log(`${date.getHours()%12}:${date.getMinutes()}:${date.getSeconds()} ${date.getHours()>=12?'PM':'AM'}`);
}

clock1(print24,1000);
clock2(print12,1000);