// function setCounter() {
//     let count = 0;
//     setInterval(() => {
//         count++;
//         console.log(count);
//     }, 1000);
// }

// setCounter();



function setCounter() {
    let count = 0;
    function tick() {
        count++;
        console.log(count);
        setTimeout(tick, 1000);
    }

    tick();
}

setCounter();