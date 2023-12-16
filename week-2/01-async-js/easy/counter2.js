let a = 1;

function counter(){
    console.log(a);
    a++;
    setTimeout(counter,1000);
}


counter();