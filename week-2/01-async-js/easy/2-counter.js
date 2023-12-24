var ctr = 1;
function counter(){
    console.clear();
    console.log(ctr);
    ctr++;
    setTimeout(counter,1000)
}
setTimeout(counter,1000)
