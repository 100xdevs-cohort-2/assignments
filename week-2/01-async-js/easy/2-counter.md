## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


let count = 0;
function Counter() {
  console.log("count over");
}
myVar = setTimeout(Counter, 1000);
for(let i = 0; i < 10000; i++){
count = count + 1;
  console.log(count);
}





































































(Hint: setTimeout)