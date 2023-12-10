function counter(value) {
    console.clear();
    console.log("Current Counter: ", value);
    setTimeout(() => counter(value + 1), 1000);
}

counter(0);