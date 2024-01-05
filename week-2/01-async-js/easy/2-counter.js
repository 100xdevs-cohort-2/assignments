// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let counter = 0;

const couterFunc = () =>{
    setTimeout(() => {
        counter++;
        console.log(counter);
        couterFunc();
    }, 1000);
}

couterFunc();






































































// (Hint: setTimeout)