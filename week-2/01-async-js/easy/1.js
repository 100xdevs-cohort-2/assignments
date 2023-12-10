// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

function printTime(){
    date=new Date();
    curTimeString=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    console.log(curTimeString)
}
setInterval( printTime,1000)