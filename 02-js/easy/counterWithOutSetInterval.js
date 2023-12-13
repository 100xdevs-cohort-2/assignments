let a = 0
function couterWithOutSetTimeout(){
    setTimeout(function(){
        a++
        console.log(a);
    }, 1000)
    setTimeout(couterWithOutSetTimeout, 1000)
}

couterWithOutSetTimeout()