/**
 * Write a program to code a counter in JavaScript
 */

function counter(count) {
  setTimeout(() => {
    console.log(count)
    counter(count+1)
  }, 1000)
}

counter(0)
