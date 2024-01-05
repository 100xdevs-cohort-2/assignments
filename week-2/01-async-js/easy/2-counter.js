let count = 0;
function counter() {
    console.log(count);
    count = count + 1;
    setTimeout(counter, 1000);
}

counter();