const displayTime = () => {
    function formatTimeWithLeadingZero(value) {
        return value < 10 ? `0${value}` : value;
    }
    
    let currentDate = new Date();
    
    let hours = formatTimeWithLeadingZero(currentDate.getHours());
    let minutes = formatTimeWithLeadingZero(currentDate.getMinutes());
    let seconds = formatTimeWithLeadingZero(currentDate.getSeconds());
    
    let formattedTime = `${hours}:${minutes}:${seconds}`;
    
    console.log(formattedTime);
}


setInterval(displayTime, 1000);

const displayTime2 = () => {
    function formatTimeWithLeadingZero(value) {
        return value < 10 ? `0${value}` : value;
    }
    
    let currentDate = new Date();
    
    let hours = formatTimeWithLeadingZero(currentDate.getHours());
    let minutes = formatTimeWithLeadingZero(currentDate.getMinutes());
    let seconds = formatTimeWithLeadingZero(currentDate.getSeconds());
    
    let formattedTime = `${hours}:${minutes}:${seconds}`;
    if(hours>=12){
          console.log(formattedTime+"PM")
    }
    else{
        console.log(formattedTime+"AM")

    }
}


setInterval(displayTime2, 1000);
