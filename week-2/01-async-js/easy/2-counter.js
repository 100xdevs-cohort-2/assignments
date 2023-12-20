let counter = 1;

function func(){
    setTimeout(function (){
        func(),
        counter++;
        console.log(counter);
    },1000);
}

func();