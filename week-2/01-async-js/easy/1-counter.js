function counter(){
    let t = 0;
    setInterval(()=>{
        console.log(t);
        t++;
    }, 1000)
}
counter();