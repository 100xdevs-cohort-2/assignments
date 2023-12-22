
let count = 0;

// Function to update the counter and schedule the next update
function updateCounter() {
    count++;
    console.log(count);


    setTimeout(updateCounter, 1000);
}


setTimeout(updateCounter, 1000);

