/*
## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

*/

function counter(cnt) {
    let count = cnt || 0
    
    function inc() {
      console.log(count)
      count++
      setTimeout(inc, 1000)
    }
  
    inc()
  }

  createCounter(0)
  








































































//(Hint: setTimeout)