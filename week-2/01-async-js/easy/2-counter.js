function timer(sec){
    console.log(sec++);
    setTimeout(() => {timer(sec)}, 1000);
}
timer(0)