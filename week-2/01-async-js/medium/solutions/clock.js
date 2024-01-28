
const currentDate = new Date()
const hours = currentDate.getHours()
const minutes = currentDate.getMinutes()
const seconds = currentDate.getSeconds()

console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());

function formatTime(hours, minutes, seconds) {
    
    if(hours > 12) {
        console.log(`${hours}:${minutes}::${seconds}`);
        console.log(`${hours%12}:${minutes}:${seconds} PM`);
    }
    else {
        console.log(`${hours}:${minutes}::${seconds}`);
        console.log(`${hours%12}:${minutes}:${seconds} AM`);
    }
}


setInterval(() => {
    formatTime(hours, minutes, seconds)
} ,1000)

