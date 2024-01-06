setInterval(() => {
    console.clear();
    let time = new Date();
    // console.log(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`);
    let HH = (time.getHours() - 12) % 12;
    HH = HH < 10 ? `0${HH}` : HH;
    let MM = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
    let SS = time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds();
    let meridian = time.getHours() >= 12 ? "PM" : "AM";
    console.log(`${HH}:${MM}:${SS} ${meridian}`);
}, 1000);