// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function getTime(){
    var currentDate = new Date();
    time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    console.log(time);
    setTimeout(getTime,1000);
}

getTime();





































































// (Hint: setTimeout)