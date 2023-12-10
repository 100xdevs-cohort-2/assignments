function printTime24(){
    let dateObj = new Date();
    let sec = dateObj.getSeconds();
    let hr = dateObj.getHours();
    let min = dateObj.getMinutes();
    setInterval(() => {
        sec = (++sec)%60;
        min = sec==0 ? (++min)%60 : (min)%60;
        hr = min==0 ? (++hr)%24 : (hr)%24;
        sec = String(sec).padStart(2, 0);
        min = String(min).padStart(2, 0);
        hr = String(hr).padStart(2, 0);
        console.log(hr + ":" + min + ":" + sec);
    }, 1000);
}

function printTime12(){
    let dateObj = new Date();
    let sec = dateObj.getSeconds();
    let hr = dateObj.getHours();
    let hr12 = hr%12;
    let min = dateObj.getMinutes();
    let tStamp = hr>=12 ? "PM" : "AM";
    setInterval(() => {
        sec = (++sec)%60;
        min = sec==0 ? (++min)%60 : (min)%60;
        hr = min==0 ? (++hr)%24 : (hr)%24;
        tStamp = hr>=12 ? "PM" : "AM";
        hr12 = hr%12;
        sec = String(sec).padStart(2, 0);
        min = String(min).padStart(2, 0);
        hr12 = String(hr12).padStart(2, 0);
        console.log(hr12 + ":" + min + ":" + sec + " " + tStamp);
    }, 1000);
}

// printTime24();
printTime12();