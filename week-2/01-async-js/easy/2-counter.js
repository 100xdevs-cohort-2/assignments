/**
 * Without using setInterval code a counter
 */

function counter() {
  let count = 0

  // To increment the counter
  function increment() {
    console.log(count)
    count++
    setTimeout(increment, 1000)
  }
  increment()
}

counter()

