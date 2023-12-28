// Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck. 

let timer = 0

function updateTimer() {
    timer++
    console.log(timer);
    setTimeout(updateTimer, 1000)
}

updateTimer()












































































// (Hint: setTimeout)