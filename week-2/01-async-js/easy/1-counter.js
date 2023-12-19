function counter(count) {
    setInterval(function () {
        console.log(count++)
    }, 1000)
}

counter(0);