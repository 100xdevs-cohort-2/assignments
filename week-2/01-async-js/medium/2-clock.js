
/*
Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

*/

function displayTime(){

    date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    hours = (hours < 10 ? '0' : '') + hours;
    minutes = (minutes < 10 ? '0' : '') + minutes;
    seconds = (seconds < 10 ? '0' : '') + seconds;
    console.log(hours+':'+minutes+':'+seconds);

    let amPm = (hours >= 12 ? 'PM' : 'AM');
    hours = (hours > 12 ? hours-12 : hours);

    console.log(hours+':'+minutes+':'+seconds+' '+amPm);

};
// console.log(displayTime());
// console.log(displayTimeInAMPM());

const intervalId = setInterval(() => {
    displayTime();
   }, 1000); // 1000 milliseconds = 1 second