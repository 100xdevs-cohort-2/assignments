/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

const wait = require("./1-promisify-setTimeout");

async function sleep(milliseconds) {
  await wait(milliseconds / 1000); //since wait() takes arguments in seconds and  not milliseconds
}

module.exports = sleep;
