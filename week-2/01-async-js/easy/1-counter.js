function syncCounter(count, end) {
    let intervalId = setInterval(() => {
        count++;
        if (count <= end) {
            console.log(count);
        } else {
            clearInterval(intervalId);
        }
    }, 1000);
}
syncCounter(0, 3);