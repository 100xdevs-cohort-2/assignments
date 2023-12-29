let count = 0
function timer(){
    if (count==1000){
        return null
    }
    console.log(count)
    count+=1
    setTimeout(timer, 1000)
}

ans  = timer()