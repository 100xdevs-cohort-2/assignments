function countWithoutInterval(count) {
    setTimeout(() => {
        console.log(count++);
        countWithoutInterval(count);
    }, 1000);
}

countWithoutInterval(1)