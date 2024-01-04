let count = 0;
function counter() {
    console.log(count);
    count = count + 1;
}

const intervalId = setInterval(counter, 1000);

setTimeout(() => {
    console.log("interval cleared");
    clearInterval(intervalId);
}, 5000);