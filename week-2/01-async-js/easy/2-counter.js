while (true) {
    console.clear()
    const date = new Date()
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    setTimeout(console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`), 1000);
}