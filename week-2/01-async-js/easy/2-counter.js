let count = 1
let timeoutId
function counter(seconds) {
  console.log(count);
  if (count === seconds) {
    clearTimeout(timeoutId)
    timeoutId = null
    return
  }
  count++
  timeoutId = setTimeout(() => counter(seconds), 2000)
}

counter(3)