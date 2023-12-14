let count = 0;

function counter2() {
    setTimeout(function() {
        count++;
        counter2();
    }, 1000);
}
counter2();