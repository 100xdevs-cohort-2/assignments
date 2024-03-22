// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function my_time(){

setInterval(function(){
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    const meridian = hours >= 12 ? 'PM' : 'AM';
    hours = hours > 12 ? hours - 12 : hours;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const currentTime = `${hours}:${minutes}:${seconds} ${meridian}`;
    
    console.log('Current time:', currentTime);

},1000);


}
my_time();