// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

var ans = 0;

function counter(){
    ans+=1;
    console.clear();
    console.log(ans)
    setTimeout(counter,1000)

}

counter()