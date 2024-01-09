let count = 0;

function increment() {
    if (count > 100) {
        console.log("Countdown complete!");
        return;
    }
    count++;
    console.log(count);
}


setInterval(increment, 1000);