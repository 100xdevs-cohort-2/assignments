setInterval(function Counter() {
    const date = new Date();
    let HH = date.getHours();
    let MM = date.getMinutes();
    let SS = date.getSeconds();
    console.log(HH+':'+MM+':'+SS);
}, 1000);
