// Logging time takes a bit of extra time, but commenting them out, the code should work as expected.

let count = 0;
let pTime = new Date();
setInterval(function () {
    count += 1;
    let cTime = new Date();
    console.log("Time passed :", (cTime - pTime)/1000, ", Count :", count);
    cTime = pTime;
}, 1000)