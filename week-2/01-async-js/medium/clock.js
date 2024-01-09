let currentDate = new Date();
console.log(currentDate)
let hours = currentDate.getHours();
let formatedhour = hours % 12 || 12;
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();
let AmPm = hours => 12 ? "PM" : "AM"



// Using SetInterval

function realtime() {
    setInterval(() => {
        let currentDate = new Date();
        let hours = currentDate.getHours();
        let formatedhour = hours % 12 || 12;
        let minutes = currentDate.getMinutes();
        let seconds = currentDate.getSeconds();
        const amPm = hours >= 12 ? 'PM' : 'AM'

        console.log(`${formatedhour}:${minutes}:${seconds} ${amPm}`)
    }, 1000)
}
realtime()


//Using SetTimeOut

let myclock = function () {
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let formatedhour = hours % 12 || 12;
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    const amPm = hours >= 12 ? 'PM' : 'AM'
    setTimeout(() => {
        console.log(`${formatedhour}:${minutes}:${seconds} ${amPm}`)
        myclock()
    }, 1000)
}

myclock()