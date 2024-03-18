let i = 0;
function call(){
    console.log(i++);
    if(i == 10) return;
    setTimeout(call,1000);
}
call()
