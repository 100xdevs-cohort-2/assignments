function counter(initialValue){
    let count = initialValue;
    let id = setInterval(() => {
        console.log(count--);
        if(count < 0){
            clearInterval(id);
            console.log("Timeout");
        }
    }, 1000)
}

counter(10);