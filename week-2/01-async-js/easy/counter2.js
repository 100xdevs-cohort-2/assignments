// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
// (Hint: setTimeout)
let a = 0;
function fun(){
    console.log(a);
    a++;
    setTimeout(fun,1000);
}
fun();

