function clock(){
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    process.stdout.write(`\r${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
}

setInterval(clock,1000);