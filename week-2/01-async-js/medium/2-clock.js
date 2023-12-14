let count = 0;
let maxCount = 100;
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes() + 50;
let seconds = date.getSeconds()
let meridian = hours >= 12 ? "PM" : "AM";
if (hours >= 12)
    hours -= 12;
counter(meridian, hours, minutes, seconds);
function counter(meridian, hours, minutes, seconds) {
    console.log(`${hours}:${minutes}:${seconds}:${meridian}`);
    if (count <= maxCount) {
        setTimeout(() => {
            seconds += 1;
            if (seconds > 59) {
                seconds = 0;
                minutes += 1;
                if (minutes > 59) {
                    minutes = 0;
                    hours += 1;

                    if (hours > 11) {
                        hours = 0;
                        if (meridian == "PM") meridian = "AM";
                        else meridian = "PM"
                    }
                }
            }
            count++;
            counter(meridian, hours, minutes, seconds)
        }, 1000);
    }
}

