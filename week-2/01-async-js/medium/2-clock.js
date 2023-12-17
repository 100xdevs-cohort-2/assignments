/**
 * Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
 * clock that shows you the current machine time?
 *
 * Can you make it so that it updates every second, and shows time in the following formats -
 *
 *  - HH:MM::SS (E.g. 13:45:23)
 *
 *  - HH:MM::SS AM/PM (E.g. 01:45:23 PM)
 */
setInterval(function () {
    let date = new Date()
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}, 1000);