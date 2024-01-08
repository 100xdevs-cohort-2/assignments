// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


const displayTime = () => {
    function formatTimeWithLeadingZero(value) {
        return value < 10 ? `0${value}` : value;
    }
    
    let currentDate = new Date();
    
    let hours = formatTimeWithLeadingZero(currentDate.getHours());
    let minutes = formatTimeWithLeadingZero(currentDate.getMinutes());
    let seconds = formatTimeWithLeadingZero(currentDate.getSeconds());
    
    let formattedTime = `${hours}:${minutes}:${seconds}`;
    
    console.log(formattedTime);
}


setInterval(displayTime, 1000);

const timeDisplay = () => {

function formatTimeWithZero(value) {
    return value < 10 ? `0${value}` : value;
}

function getAMPM(hours) {
    return hours >= 12 ? 'PM' : 'AM';
}

let currentDate = new Date();

let hour = formatTimeWithZero(currentDate.getHours() % 12 || 12); // Convert to 12-hour format
let minute = formatTimeWithZero(currentDate.getMinutes());
let second = formatTimeWithZero(currentDate.getSeconds());
let ampm = getAMPM(currentDate.getHours());

let formattedTime = `${hour}:${minute}:${second} ${ampm}`;

console.log(formattedTime);
}

setInterval(timeDisplay, 1000);

