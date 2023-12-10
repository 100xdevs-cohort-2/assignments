function counter(initialValue){
    console.log(initialValue);
    if(initialValue === 0){
        console.log("Done!");
        return;
    }
    setTimeout(counter, 1000, initialValue - 1);
}

counter(5);