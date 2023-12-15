function Counter(){
    let i = 0;
    return function count(){
        setTimeout(() => {
            console.log("time elapsed : " + i + " sec(s)");
            i++
            count()
        }, 1000);
    }
}
const countTime = Counter();
countTime();