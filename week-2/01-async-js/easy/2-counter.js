class Counter{
    constructor() {
        this.value = 0;
        this.intervalId = null;
    }


    start(){
        this.intervalId = setInterval(() => {
            this.value++;
            console.log(this.value);
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    reset() {
        this.stop();
        this.value = 0;
    }
}

// Example usage:
const myCounter = new Counter();
myCounter.start(); // Counter starts incrementing every second

// To stop the counter after some time (e.g., 5 seconds):
setTimeout(() => {
  myCounter.stop(); // Counter stops incrementing after 5 seconds
}, 10000);
