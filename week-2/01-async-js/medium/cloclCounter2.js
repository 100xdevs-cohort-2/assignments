function Counter(){
    return function count(){
        setTimeout(() => {
            const date = new Date();
            let HH = date.getHours();
            let MM = date.getMinutes();
            let SS = date.getSeconds();
            console.log(HH+':'+MM+':'+SS);
            count()
        }, 1000);
    }
}
const countTime = Counter();
countTime();