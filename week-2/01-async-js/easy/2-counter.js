let t = 0;
function counter2(){
    console.log(t);
    setTimeout(() => {
        t++;
        counter2();
    }, 1000);
}
counter2();