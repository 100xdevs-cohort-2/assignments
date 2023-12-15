let count = 0;

function counter() {
    console.clear();
    count += 1;
    console.log(count);
    setTimeout(counter,1000);
}

counter();