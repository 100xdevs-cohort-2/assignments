let count = 0;

const counter = () => {
    const intervalId = setInterval(() => {
        count++;
        console.log(count);
    }, 1000);
}

counter();