
const addLeadingZeros = (num , length = 2) => {
    return num.toString().padStart(length , '0');
}

const getRailwayTime = (date) => {
    let hrs = addLeadingZeros(date.getHours());
    let mins = addLeadingZeros(date.getMinutes());
    let secs = addLeadingZeros(date.getSeconds());
    return `${hrs}:${mins}::${secs}`;
}

const get12HourFormat = (date) => {
    let hrs = date.getHours();
    let designation = "AM";

    if(hrs >= 12 ){
        designation = "PM";
    }

    if(hrs>12){
        hrs = hrs-12;
    }

    hrs = addLeadingZeros(hrs);
    let mins = addLeadingZeros(date.getMinutes());
    let secs = addLeadingZeros(date.getSeconds());

    return `${hrs}:${mins}::${secs} ${designation}`; 
}

const clock = () => {
    setInterval(()=>{
        const date = new Date();
        console.log(getRailwayTime(date));
        console.log(get12HourFormat(date));
    },1000);
}
clock();