

let hour = 0;
let min = 0;
let second = 0;


function clock(){
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let ampm = hours<12 ? "AM" :"PM";

    hours = hours%12;
    minutes = minutes<10 ? "0"+minutes:minutes;
    hours = hours<10 ? "0"+hours:hours;
    seconds = seconds<10?"0"+seconds:seconds;

    console.log(hours+":"+minutes+":"+seconds+" "+ampm);
    
    setTimeout(clock,1000);
}

clock();