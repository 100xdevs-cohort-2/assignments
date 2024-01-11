// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


console.log("Start");
function printCounter(){
    setTimeout(()=> {
        console.log(counter);
        if(counter >= 10){
            console.log("End");
            return;
        }
        counter++;
        printCounter();
    },1000)
}

printCounter();





































































// (Hint: setTimeout)