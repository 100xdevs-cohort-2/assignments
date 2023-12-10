let count = 0;

function counter() {
    count++;
    console.log(count);
}

setInterval(counter, 1000);