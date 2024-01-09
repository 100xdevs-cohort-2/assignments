function counter(start) {
    let count = start;
    let intervalId = setInterval(() => {
        console.log("Cohort-" + count);
        if (count == 5) {
            clearInterval(intervalId)
            console.log("Thank You!");
        }
        else {
            count++;
        }
    }, 1000)
}
counter(1);