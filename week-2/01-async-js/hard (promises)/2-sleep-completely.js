/**
 * Sleeps for the given number of milliseconds.
 *
 * @param {number} milliseconds - The number of milliseconds to sleep.
 * @return {Promise} A promise that resolves after the sleep period.
 */
function sleep(milliseconds) {
    const start = new Date().getTime();
    // This loop will run for the given number of milliseconds
    while(new Date().getTime() < start + milliseconds);

    return Promise.resolve();
}

module.exports = sleep;
