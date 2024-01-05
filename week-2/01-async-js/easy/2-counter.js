let c = 0;

function counterIncrement() {
    return c++;
}

function myOwnSetTimeoutFunction() {
    setTimeout(() => {
        counterIncrement();
        console.log(c);
        if (c<10){
            myOwnSetTimeoutFunction();
        }
    }, 1000);
}


myOwnSetTimeoutFunction();
