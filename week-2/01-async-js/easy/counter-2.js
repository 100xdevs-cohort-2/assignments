let a = 0;

function counter(){
    setTimeout(function(){
        a++;

        console.log(a);
        counter();

    },1000)
}

counter();