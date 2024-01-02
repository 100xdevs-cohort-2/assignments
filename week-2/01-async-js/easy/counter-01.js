// Counter using setInterval
let n = 0;
function counter(){
    setInterval(function(){
        console.log(n);
        n++;

    },1000);
}
counter();