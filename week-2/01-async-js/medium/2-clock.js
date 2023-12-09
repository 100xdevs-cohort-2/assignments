let count = 0;

function updateClock() {
    const now = new Date();

    // Format 1: HH:MM:SS
    const timeFormat1 = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    });

    const formattedTime1 = timeFormat1.format(now);

    // Format 2: HH:MM:SS AM/PM
    const timeFormat2 = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
    });

    const formattedTime2 = timeFormat2.format(now);

    console.clear();
    console.log(`Current Time (Format 1): ${formattedTime1}`);
    console.log(`Current Time (Format 2): ${formattedTime2}`);
}

function counter2() {
    updateClock();
    setTimeout(counter2, 1000);
}

function counter1(){
    updateClock();
}
// setInterval(counter1, 1000);

counter2();
