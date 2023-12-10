
let seconds = 0;
let el = document.getElementById('seconds-counter');

function incrementSeconds(){
    seconds += 1;
    el.innerText = "You've been on this website for " + seconds + " seconds.";
}

let cancel = setInterval(incrementSeconds, 1000);