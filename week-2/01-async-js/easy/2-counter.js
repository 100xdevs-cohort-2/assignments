//Counter without setInterval

//Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


let counter =0;
function incrementCounter() {

 
   counter= counter + 1;
  console.log(counter);
  setTimeout(incrementCounter, 1000);
   
};

incrementCounter();




































































//(Hint: setTimeout)