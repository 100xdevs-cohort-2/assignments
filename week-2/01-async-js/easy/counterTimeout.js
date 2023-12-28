let count = 0;
function counter(){
    console.log(count);
    count++;
    setTimeout(counter,1000)
}

counter();
