// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

function checkCounter(countStop) {
  let countdown = 0;
  let intervalID = setInterval(function (){
    countdown++;
    console.log("Counter - ",countdown);
    if (countdown === countStop) {
      clearInterval(intervalID);
    }
  }, 1000);
}

let value = checkCounter(10);
