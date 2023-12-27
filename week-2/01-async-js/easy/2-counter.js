// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.



var counter = 1;

function printCount(){
    console.clear()
    console.log(counter)
    counter = counter+1;
    setTimeout(printCount, 1 *1000);

}

setTimeout(printCount, 1 *1000);



// for(var i=0; i<100;i++){
//     setTimeout(printCount, (i+1) *1000)
// }































































// (Hint: setTimeout)