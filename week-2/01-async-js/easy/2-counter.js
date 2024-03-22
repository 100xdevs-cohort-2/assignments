let currentVal = 0;
function updateCounter() {
    currentVal = currentVal + 1;
    console.log(currentVal);
    setTimeout(updateCounter, 1000);
}

updateCounter();