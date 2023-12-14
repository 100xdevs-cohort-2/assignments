// Set Timeout executes once and stops
// Execution starts when the timer has passed.
var x = 1;
for(var time=1; time<=10; time++){
  setTimeout(() => {
    console.log(x);
    x++;
  }, time*1000);
}