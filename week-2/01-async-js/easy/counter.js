let counter = 0;

const intervalId = setInterval(()=>{
    console.log(counter);
    counter++;

    if(counter === 20){
        clearInterval(intervalId);
    }
},1000)

let counterInt = 0;

function incrementCounter() {
    console.log("Counter:", counterInt);
    counterInt++;

    if (counterInt <= 10) {
        setTimeout(incrementCounter, 1000); 
    } else {
        console.log("Counter reached 10. Stopping.");
    }
}

// Start the counter
incrementCounter();
