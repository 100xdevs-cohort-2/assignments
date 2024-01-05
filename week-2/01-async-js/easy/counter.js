let count = 0;

// Function to update the counter and display
function updateCounter() {
    count++;
    console.log(count);
}


setInterval(updateCounter, 1000);