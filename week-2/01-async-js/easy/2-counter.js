function counter(count) {
    setTimeout(function () {
        counter(++count)
    }, 1000)

    console.log(count)
}

counter(0);