/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */
function digitalClock() {
    return new Promise(resolve => {
        const currentTime = new Date();
        let hours = currentTime.getHours();
        const minutes = String(currentTime.getMinutes()).padStart(2, "0");
        const seconds = String(currentTime.getSeconds()).padStart(2, "0");

        let tF = "AM";
        if (hours >= 12) {
            tF = "PM";

            if (hours === 0) {
                hours = 12;
            }
        }

        const time = `${hours}:${minutes}:${seconds} ${tF}`;
        resolve("the function is resolved at " + time);
    });
}

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function promiseFunction() {
    let promiseChain = Promise.resolve();
        promiseChain
            .then(() => {
                digitalClock().then(r=>{console.log("Before execution " + r)});
                return sleep(5000);
            })
            .then(() => {
                digitalClock().then(r => {console.log("After execution" + r);});
            });

}

promiseFunction();
