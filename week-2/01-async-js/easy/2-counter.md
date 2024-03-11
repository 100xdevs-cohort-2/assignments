## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let i = 1;
function couterTwo(current,time){
        setTimeout(() => {
            console.log(current);
            if(current < time){
            couterTwo(current = current + 1, time);
            }
        }, 1000);
}






































































(Hint: setTimeout)
