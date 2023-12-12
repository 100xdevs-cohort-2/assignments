function counter(counter) {
    setInterval(() => {
        console.log(counter++);
    }, 1000);
}

counter(1);