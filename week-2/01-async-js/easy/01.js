let count = () => {
    setTimeout(() => {
        console.log("i am settimeout")
    }, 1000);
}

count()

let a = 0;
for (let i = 0; i < 10000000; i++) {
    a += 1;
}
console.log("a =", a)