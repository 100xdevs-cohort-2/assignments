// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
function Count(n){
    let currentcount = 0;

    function increasecount(){
        currentcount+=1;
        if(currentcount <= n) {
           console.log(currentcount);
            setTimeout(increasecount, 1000);
        }
    }
    increasecount();
}

Count(5);






































































// (Hint: setTimeout)