// setInterval(() => {
//     const date = new Date();
//     let hrs = date.getHours();
//     let min = date.getMinutes();
//     let sec = date.getSeconds();
//     const ampm = hrs >= 12 ? 'PM' : 'AM';

//     hrs = hrs % 12;
//     hrs = hrs ? (hrs < 10 ? "0" + hrs : hrs) : 12;

//     min = min < 10 ? "0" + min : min;
//     sec = sec < 10 ? "0" + sec : sec;

//     console.log(`${hrs}:${min}:${sec} ${ampm}`);
// }, 1000);

// or

setInterval(() => {
    const date = new Date();

    let ampm = date.getHours > 12 ? "AM" : "PM";

    let time = `${date.getHours() % 12} : ${date.getMinutes()} : ${date.getSeconds()} ${ampm}`;

    console.log(time);
}, 1000);