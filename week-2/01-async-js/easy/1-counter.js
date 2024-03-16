/*Counter using setTimer*/

// var counter=0;
// function startTimer(){
//     setTimeout(function(){
//         counter++;
//         console.log(counter);
//         startTimer();
//     },1000);
// }
// startTimer();
/* COunter using set Interval */
var counter =0;

setInterval(function(){
    counter++;
    console.log(counter);
},1000);