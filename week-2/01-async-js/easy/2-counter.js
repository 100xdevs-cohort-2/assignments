
let a=1

function counter(){
    console.clear();
    console.log(a);
    a++;
    if(a>5){
        return 0
    }
    setTimeout(counter,1000)
}

counter()