// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.



let counter=0;

function count(){
    setTimeout(count,1000);
    console.log(++counter);
}

count()



































































// (Hint: setTimeout)