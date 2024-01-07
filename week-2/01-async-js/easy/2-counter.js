let count = 0;

for (let i = 0; i <= 30; i++) {
    setTimeout(() => {
        count++;
        console.log(count);
    }, 1000 * i);
}

