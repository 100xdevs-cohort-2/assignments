let timer = 0;

function count() {
    timer++;
    console.log(timer);
}

setInterval(count , 1000);