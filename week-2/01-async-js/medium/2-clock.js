function updateTime(){
    const now = new Date()
    let hours = now.getHours()
    const minutes = ('0' + now.getMinutes()).slice(-2);
    const seconds = ('0' + now.getSeconds()).slice(-2);
    let time_format_1 = ''
    if (hours < 10) {
        time_format_1 = `0${hours}:${minutes}:${seconds}`
    }
    else {
        time_format_1 = `${hours}:${minutes}:${seconds}`
    }
    console.log('Time in HH:MM:SS format: ', time_format_1)
    let amPm = ''
    if (hours >= 12) {
        amPm = 'PM'
    }
    else {
        amPm = 'AM'
    }
    hours %= 12 || 12
    let time_format_2 = ''
    if (hours < 10) {
        time_format_2 = `0${hours}:${minutes}:${seconds} ${amPm}`
    }
    else {
        time_format_2 = `${hours}:${minutes}:${seconds} ${amPm}`
    }
    console.log('Time in HH:MM:SS AM/PM format: ', time_format_2)
}
setInterval(updateTime, 1000)
updateTime()
