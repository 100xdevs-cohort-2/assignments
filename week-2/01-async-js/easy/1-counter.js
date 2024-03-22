let counter = 0;

function updateCounter() {
    counter++;
    console.log(counter); // This will print the counter value to the console   
}
setInterval(updateCounter, 1000);
