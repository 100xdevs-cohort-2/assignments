let count = 0;
let maxCount = 3;

function counter() {
    if (count <= maxCount) {
        console.log(count++);
        setTimeout(counter, 1000);
    }
}

counter();