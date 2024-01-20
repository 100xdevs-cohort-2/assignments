
let count = 1;
let maxCount = 10
function counter(){
    if(count > maxCount){
        return
    }
    console.log(count)
    count = count + 1;
    setTimeout(counter, 1000)
}

counter()

