function timeFormat() {
    let now = new Date();
    let comHour = now.getHours();
    let minute = String(now.getMinutes()).padStart(2,'0');
    let second = String(now.getSeconds()).padStart(2,'0');
    let suffix = (parseInt(comHour)>=12)?'pm':'am';
    if(comHour>12) { 
        var hour = String(comHour-12).padStart(2,'0');
    }
    console.clear();
    console.log(`${comHour}:${minute}:${second}`);
    console.log(`${hour}:${minute}:${second} ${suffix}`);
    setTimeout(timeFormat,1000);
}

timeFormat();