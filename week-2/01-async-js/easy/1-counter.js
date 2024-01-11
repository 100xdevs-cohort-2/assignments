// Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

let counter = 0;

// for(let i = 0; i< 10; i++){
//     console.log(counter);
//     setTimeout(() => {
//         counter++;
//     }, 1000);
// }

console.log("Start");

let printCounter = setInterval(() => {
    console.log(counter);
    counter++;
    if(counter >= 10){
        console.log("End");
        clearInterval(printCounter);
    }
},1000)

