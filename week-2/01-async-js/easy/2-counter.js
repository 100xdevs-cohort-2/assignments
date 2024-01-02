// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// let count = 0;


// setTimeout(function incrementCount(){
//     count++;
//     console.log(count);
//     setTimeout(incrementCount,1000);
// },1000)


function counter(){
    setTimeout(()=>{
        const date = new Date();
        console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
        counter();
    },1000);
}

counter();








































































// (Hint: setTimeout)