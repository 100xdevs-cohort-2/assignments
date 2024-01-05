// 3. Create a terminal clock (HH:MM:SS)

function getTime(){
    let date = new Date();
    let hr = date.getHours().toString().padStart(2, '0');
    let min = date.getMinutes().toString().padStart(2, '0');
    let sec = date.getSeconds().toString().padStart(2, '0');
    console.log(`${hr}:${min}:${sec}`);
}

setInterval(getTime,1000)