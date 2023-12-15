// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
// (Hint: setTimeout)

function countSet(timeDelay){
  let counter = 0;
  setTimeout(function(){
    counter++;
    console.log("Counter - ",counter);
  },timeDelay);
}

let ans = countSet(1000);


