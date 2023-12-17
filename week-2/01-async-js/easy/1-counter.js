/**
 * Write a program to code a counter in JavaScript
 */

function counter() {
  let count = 0
  function increment() {
    count++
    console.log(count)
  }
  setInterval(increment, 1000)
}

counter()