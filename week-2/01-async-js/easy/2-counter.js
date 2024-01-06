// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)

var count =0;

function counter(){
    console.log(count);
    count++;

    if(count<=10){
    setTimeout(counter, 1000);
    }

}

counter();
