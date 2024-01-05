
/**
 * A function that starts a timer and logs the count every second. Using setInterval
 */
const counter = () => {
    console.log("Starting Timer: ");

    let count = 1;
    setInterval(() => {
        console.log(count++);
    }, 1000);
}

counter()