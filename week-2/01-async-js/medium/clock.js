setInterval(() =>{
    const curr = new Date();
    let h = curr.getHours();
    const m = curr.getMinutes();
    const s = curr.getSeconds();

    console.log(`${h}:${m}:${s}`);    

    const hh = h % 12;
    if(hh == 0) hh = 12;

    console.log(`${hh}:${m}:${s} ${(h >= 12 & h < 24) ? "PM" : "AM"}`);

},1000);