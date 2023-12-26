function counter1(){
    let counter = 0;
    setInterval(function(){
        console.log(counter);
        counter++;
    },1000);
}


counter1();