/**
 * A function that starts a timer and logs the count every second. Using setTimeout
 */
const counter = () => {
    console.log("Starting Timer: ");

    let count = 1;
   
    const updateCount = () => {
        console.log(count++);
        setTimeout(updateCount, 1000);
    }

    updateCount();
}

counter();