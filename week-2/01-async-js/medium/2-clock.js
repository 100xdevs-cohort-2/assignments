const showTime = () => setInterval(() => {
    const date = new Date();
    let HH = date.getHours()
    let MM = date.getMinutes()
    let SS = date.getSeconds()

    let hh;
    let amOrPm;
    if(HH > 12){
        hh = HH - 12;
        amOrPm = 'PM'
    }
    else{
        hh = HH;
        amOrPm = 'AM'
    }
    console.log(`${HH}:${MM}:${SS}`);
    console.log(`${hh}:${MM}:${SS} ${amOrPm}`)
}, 1000)

showTime();