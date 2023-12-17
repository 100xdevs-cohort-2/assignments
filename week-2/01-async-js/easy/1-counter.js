let i = 0;
const logIt = (i) => {
    console.log(i);
}

setInterval(() => {
    console.log(++i);
}, 1000);

