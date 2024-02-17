setInterval(() => {
    let dateTime = new Date();
    let ampm = dateTime.getHours < 12 ? "AM" : "PM";
    process.stdout.write(`\r${dateTime.getHours()}:${dateTime.getMinutes()}:${dateTime.getSeconds()} ${ampm}`);
}, 1000);