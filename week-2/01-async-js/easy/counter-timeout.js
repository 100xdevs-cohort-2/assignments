let count = 0;
function timer(){
  count++
  console.log(count)
  setTimeout(timer,1000)
}

timer()