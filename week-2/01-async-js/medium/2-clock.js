let count = 0;
function counter() {

    let date = new Date();
    console.log(date);
    setTimeout(counter, 1000);
}

counter();