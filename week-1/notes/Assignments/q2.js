// 2. Calculate the time it takes between a setTimeout call and the inner function actually running

function f(){
    var endTime = Date.now();
    console.log(endTime-startTime);
}

let startTime = Date.now()
setTimeout(f,0);
