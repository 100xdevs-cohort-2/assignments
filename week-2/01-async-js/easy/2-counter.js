let count = 1;
let counter = () => {
    console.log(count);
    count++;
    setTimeout(counter, 1000);
}
counter();