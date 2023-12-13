// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function counter(interval, i){
    setTimeout(function(){
        console.log(i);
        i++;
        counter(interval, i);
    },1000)
}

counter(1000, 0);