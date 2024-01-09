## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

s=0
function counter(){
  s+=1
  console.log(s)
  setTimeout(counter,1000)
}

setTimeout(counter,1000);


































































(Hint: setTimeout)
