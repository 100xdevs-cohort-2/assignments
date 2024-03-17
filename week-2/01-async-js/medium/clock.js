let counter = 0;

function updateClock(){
    const now = new Date();

    const timeFormatFor24 = new Intl.DateTimeFormat('en-US',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    })
    const formattedDate24 = timeFormatFor24.format(now);

    const timeFormatFor12 = new Intl.DateTimeFormat('en-US',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
    })
    const formattedDate12 = timeFormatFor12.format(now);

    console.log("12-hour format: ",formattedDate12);
    console.log("24-hour format: ",formattedDate24);
}

const intervalId = setInterval(() => {
    updateClock();
},1000)

function stopUpdating(){
    clearTimeout(intervalId);
    console.log("Clock stopped after 20 seconds")
}

setTimeout(stopUpdating,2000000);