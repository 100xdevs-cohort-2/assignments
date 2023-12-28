function incrementSecondCounter() {
    setTimeout(function () {
        count += 1;
        console.log(count);
        incrementSecondCounter();
    }, 1000);
}

let count = 0;
incrementSecondCounter();