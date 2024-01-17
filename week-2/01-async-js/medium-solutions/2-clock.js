console.log(new Date().getHours());
setInterval(() => {
    console.clear();
    const time = new Date();
    const h = (time.getHours() + 6) % 24;
    const m = (time.getMinutes() + 31) % 60;
    const s = time.getSeconds();
    const amPm = h >= 12 ? 'PM' : 'AM';
    console.log(`${h}:${m}:${s}`);
    console.log(`${h}:${m}:${s} ${amPm}`);
}, 1000);