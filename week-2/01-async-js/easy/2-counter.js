var x=0;
console.log(x);
function counter() {
    x = x+1;
    console.log(x)
    setTimeout(counter,1000)
}

counter();