let counter=0
setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    let amOrPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // midnight handling
    
    // zeroes to front
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    console.log(`${hours}:${minutes}:${seconds} ${amOrPm}`);
    console.log(++counter);
}, 1000);
