
var counter=0;
function startTimer(){
    setTimeout(function(){
        counter++;
        console.log(counter);
        startTimer();
    },1000);
}
startTimer();