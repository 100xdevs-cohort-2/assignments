// using a hh mm ss format, create a clock that updates every second

function clock() {
    let hh = new Date().getHours();
    let mm = new Date().getMinutes();
    let ss = new Date().getSeconds();
    console.log(hh + ":" + mm + ":" + ss);
    setTimeout(clock, 1000);
}

function clock2(){
    let hh = new Date().getHours();
    let mm = new Date().getMinutes();
    let ss = new Date().getSeconds();
    let meridian = "AM";
    if(hh > 12){
        hh -= 12;
        meridian = "PM";
    }
    console.log(hh + ":" + mm + ":" + ss + " " + meridian);
    setTimeout(clock2, 1000);
}

clock2();