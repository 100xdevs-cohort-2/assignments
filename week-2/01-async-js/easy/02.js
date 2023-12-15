const myTImeout = () => {
    setTimeout(() => {
        console.log("I am setTimeout")
    }, 2000);
}

myTImeout()


let a = 0;
for (let i = 0; i < 100000; i++) {
    a += 1
}
console.log("a = ", a)