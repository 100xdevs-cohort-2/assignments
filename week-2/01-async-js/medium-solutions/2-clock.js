setInterval(() => {
    console.clear();
    const time = new Date();
    const h = (time.getHours() + 5) % 24;
    const m = (time.getMinutes() + 30) % 60;
    const s = time.getSeconds();
    const amPm = h >= 12 ? 'PM' : 'AM';
    console.log(`${h}:${m}:${s}`);
    console.log(`${h}:${m}:${s} ${amPm}`);
}, 1000);