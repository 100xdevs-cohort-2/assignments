// Counter using setTimeout
let n = 0;
function counter(){
    console.log(n);
    setTimeout(function(){
        n++;
        counter();
    },1000);
}
counter();