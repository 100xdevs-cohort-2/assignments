let count = 0;
function counter(){
    console.log(++count);
    setTimeout(function(){
        counter();
    }, 1000);
}
counter();
