// 1. Create a counter in Javascript (counts down from 30 to 0)

let num = 1;

function count(){
    if (num>30){
        clearInterval(counter);
        return;
    }
    console.log(num);
    num++;
}

let counter =setInterval(count, 1*1000);

console.log("Time Finished ")