let count=0;
function counter(){
    console.clear;
    console.log(count++);
    setTimeout(counter,1000);

}
setTimeout(counter,1000);